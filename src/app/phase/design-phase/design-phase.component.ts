import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Doc } from 'src/app/model/doc.model';
import { DocsService } from 'src/app/sidebar/docs.service';

@Component({
  selector: 'app-design-phase',
  templateUrl: './design-phase.component.html',
  styleUrls: ['./design-phase.component.css']
})
export class DesignPhaseComponent implements OnInit {

  files_: Doc[] = [{
      id: 1,
      name: '',
      type:'image',
      phase: 3,
      details:{}
  }];

  constructor(private docsService: DocsService) {

  }

  ngOnInit() {
  }

  addNewDoc() {
    // doc means image as a doc for design 
    this.files_.push({
      id: this.files_.length + 1,
      name: '',
      type:'image',
      phase: 3,
      details:{}
    });
  }

  removeDoc(i: number) {
    this.files_.splice(i, 1);
  }

  docImage(event: any, i: number){
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.files_[i].details.path = event.target.result;
        (<HTMLInputElement>document.getElementById("hiddenImage_" + (i+1))).value = this.files_[i].details.path!;
      }
    }
  }

 Save() {
    let hiddenImg = (<HTMLInputElement>document.getElementById("hiddenImage_1")).value;
    this.files_[0].details.path = hiddenImg;
    this.files_[0].name = (<HTMLInputElement>document.getElementById("fileName_1")).value;
    if(this.files_.length == 1 && (!this.files_[0].name || !this.files_[0].details.path)){
      console.log("issue is here");
      console.log(`name: ${this.files_[0].name} , path: ${this.files_[0].details.path}`)
      alert("Please fill all fields");
      return;
    }

    this.files_.forEach((file)=>{
      let message = this.docsService.validate(file);
      if(message == ""){
        this.docsService.addNewDoc(file);
      } else {
        alert(message);
        return;
      }
    });
  }

}
