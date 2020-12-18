import { Component, Input, OnInit } from '@angular/core';
import { Doc } from 'src/app/model/doc.model';
import { DocsService } from 'src/app/sidebar/docs.service';

@Component({
  selector: 'app-requirements-phase',
  templateUrl: './requirements-phase.component.html',
  styleUrls: ['./requirements-phase.component.css']
})
export class RequirementsPhaseComponent implements OnInit {

  imgPath : string = "";
  constructor(private docsServices:DocsService) { }

  ngOnInit(): void {
  }

  docImage(event: any){
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.imgPath =event.target.result;
      }
    }
  }

  saveDoc(){
    let doc:Doc = <Doc>{
      id: parseInt((document.getElementById('id') as HTMLInputElement ).value),
      name: "SRS",
      type: "doc-image",
      phase: 2,
      details:{
        intro:(<HTMLInputElement>document.getElementById("intro")).value,
        purpose:(<HTMLInputElement>document.getElementById("purpose")).value,
        audience:(<HTMLInputElement>document.getElementById("audience")).value,
        overall:(<HTMLInputElement>document.getElementById("overall")).value,
        features:(<HTMLInputElement>document.getElementById("features")).value,
        path: this.imgPath
      }
    }
    this.docsServices.addNewDoc(doc);

  }

}
