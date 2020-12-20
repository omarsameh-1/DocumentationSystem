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

  files_: string[] = [""];
  toAdd:Doc[] = [];
  imgPath:string[]=[];

  constructor(private docsService: DocsService) {

  }

  ngOnInit() {
  }

  AddDocument() {
    // doc means image as a doc for design 
    this.files_.push('');
  }

  RemoveDocument(i: number) {
    this.files_.splice(i, 1);
    this.toAdd.splice(i, 1);
    this.imgPath.splice(i, 1);
  }

  docImage(event: any){
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.imgPath.push(event.target.result);
        
      }

    }
    this.handleUpload(event);
  }

  handleUpload(event:any){
    let doc = <Doc>{
      id: parseInt((document.getElementById('id') as HTMLInputElement ).value),
      name: (document.getElementById('fileName') as HTMLInputElement ).value,
      type:'image',
      phase: 3,
      details:{}
    }
    this.toAdd.push(doc);
 }

 Save() {
    for(let i = 0; i < this.toAdd.length; i++){
      this.toAdd[i].details.path = this.imgPath[i];
    }

    // if(!this.toAdd[0].details.path){
    //   alert("asdad");
    // }
    this.toAdd.forEach((file)=>{
      
      this.docsService.addNewDoc(file);      
    });
    this.files_ = [""];
    this.toAdd = [];
  }

}
