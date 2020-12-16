import { Component, Input, OnInit } from '@angular/core';
import { Doc } from 'src/app/model/doc.model';
import { DocsService } from 'src/app/sidebar/docs.service';

@Component({
  selector: 'app-requirements-phase',
  templateUrl: './requirements-phase.component.html',
  styleUrls: ['./requirements-phase.component.css']
})
export class RequirementsPhaseComponent implements OnInit {

  constructor(private docsServices:DocsService) { }

  ngOnInit(): void {
  }

  saveDoc(){
    let doc:Doc = <Doc>{
      id: 0,
      name: "SRS",
      type: "doc",
      details:{
        intro:(<HTMLInputElement>document.getElementById("intro")).value,
        purpose:(<HTMLInputElement>document.getElementById("purpose")).value,
        audience:(<HTMLInputElement>document.getElementById("audience")).value,
        overall:(<HTMLInputElement>document.getElementById("overall")).value,
        features:(<HTMLInputElement>document.getElementById("features")).value,
        Imagepath:(<HTMLInputElement>document.getElementById("FileUpload")).value
      }
    }
    this.docsServices.addNewDoc(doc);
  }

  onGetFoucs(){
    alert("Only images are allowed!");
  }

  checkInput(){
    return ((<HTMLInputElement>document.getElementById("intro")).value &&
      (<HTMLInputElement>document.getElementById("purpose")).value &&
      (<HTMLInputElement>document.getElementById("audience")).value &&
      (<HTMLInputElement>document.getElementById("overall")).value &&
      (<HTMLInputElement>document.getElementById("features")).value &&
      (<HTMLInputElement>document.getElementById("FileUpload")).value);
  }
  

}
