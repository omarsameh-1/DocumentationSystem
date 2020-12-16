import { Component, OnInit } from '@angular/core';
import { PhasesService } from 'src/app/header/phases.service';
import { Doc } from 'src/app/model/doc.model';
import { DocsService } from 'src/app/sidebar/docs.service';

// works fine need only validation 
@Component({
  selector: 'app-initial-phase',
  templateUrl: './initial-phase.component.html',
  styleUrls: ['./initial-phase.component.css']
})
export class InitialPhaseComponent implements OnInit {
    
  constructor(private docsService:DocsService , private phaseServices:PhasesService) { }

  ngOnInit(): void {
  }

  getDoc(){
    let doc:Doc = <Doc>{
      id: parseInt((document.getElementById('id') as HTMLInputElement ).value),
      name: 'Project Charter',
      type: 'doc',
      phase : 1,
      details: {
        projectTitle : (document.getElementById('projectTitle') as HTMLInputElement ).value,
        startDate : (document.getElementById('startDate') as HTMLInputElement).value,
        endDate : (document.getElementById('endDate') as HTMLInputElement).value,
        projectObjectives : (document.getElementById('projectObjectives') as HTMLInputElement).value,
        projectManager : (document.getElementById('projectManager') as HTMLInputElement).value,
        budgetInformation : (document.getElementById('budgetInformation') as HTMLInputElement).value,
        projectScope : (document.getElementById('projectScope') as HTMLInputElement).value,
      }
    }
   this.addDoc(doc);
  }

  addDoc(doc:Doc){
    this.docsService.addNewDoc(doc);  

  }

}
