import { Component, OnInit } from '@angular/core';
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
        
      }

    });
  }

}
