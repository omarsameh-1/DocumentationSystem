import { Component, OnInit } from '@angular/core';
import { Doc } from 'src/app/model/doc.model';
import { DocsService } from 'src/app/sidebar/docs.service';


@Component({
  selector: 'app-initial-phase',
  templateUrl: './initial-phase.component.html',
  styleUrls: ['./initial-phase.component.css']
})
export class InitialPhaseComponent implements OnInit {

doc:Doc = {
    id : this.docsService.getNumberOfDocs()+1,
    name : 'Project Charter',
    type: 'doc',
    details :{}
  };
    
  constructor(private docsService:DocsService) { }

  ngOnInit(): void {
  }

  getDoc(){

    this.doc.details = {
      projectTitle : (document.getElementById('projectTitle') as HTMLInputElement ).value,
      startDate : (document.getElementById('startDate') as HTMLInputElement).value,
      endDate : (document.getElementById('endDate') as HTMLInputElement).value,
      projectObjectives : (document.getElementById('projectObjectives') as HTMLInputElement).value,
      projectManager : (document.getElementById('projectManager') as HTMLInputElement).value,
      budgetInformation : (document.getElementById('budgetInformation') as HTMLInputElement).value,
      projectScope : (document.getElementById('projectScope') as HTMLInputElement).value,
    };
   this.addDoc(this.doc);
  }

  addDoc(doc:Doc){
    this.docsService.addNewDoc(doc);
  }

}
