import { Component, Input, OnInit } from '@angular/core';
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
    this.docsServices.addNewDoc({
      name:"SRS",
      id:this.docsServices.getNumberOfDocs(),
      details:{
        intro:(<HTMLInputElement>document.getElementById("intro")).value,
        purpose:(<HTMLInputElement>document.getElementById("purpose")).value,
        audience:(<HTMLInputElement>document.getElementById("audience")).value,
        overall:(<HTMLInputElement>document.getElementById("overall")).value,
        features:(<HTMLInputElement>document.getElementById("features")).value,
        Imagepath:(<HTMLInputElement>document.getElementById("FileUpload")).value
      }

    });
  }

}
