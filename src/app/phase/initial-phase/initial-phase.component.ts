import { Component, OnInit } from '@angular/core';
import { DocsService } from 'src/app/sidebar/docs.service';


@Component({
  selector: 'app-initial-phase',
  templateUrl: './initial-phase.component.html',
  styleUrls: ['./initial-phase.component.css']
})
export class InitialPhaseComponent implements OnInit {

  constructor(private docsService:DocsService) { }

  ngOnInit(): void {
  }

  getDoc(){
    let doc = {};
    console.log(form);
    doc.id= this.docsService.getNumberOfDocs()+1;
    doc.name= 'Project Charter';
    doc.details = {

      projectTitle : document.getElementById('projectTitle').value,
      startDate : document.getElementById('startDate').value,
      endDate : document.getElementById('endDate').value,
      projectObjectives : document.getElementById('projectObjectives').value,
      projectManager : document.getElementById('projectManager').value,
      budgetInformation : document.getElementById('budgetInformation').value,
      projectScope : document.getElementById('projectScope').value,
    };
   this.addDoc(doc);
  }

  addDoc(doc:any){
    this.docsService.addNewDoc(doc);
  }

}
