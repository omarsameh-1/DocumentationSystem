import { Injectable } from '@angular/core';
import { PhasesService } from '../header/phases.service';
import { Doc } from '../model/doc.model';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs: Doc[] = [];

  constructor(private phaseService:PhasesService) { }

  addNewDoc(doc: Doc) {
    let message = "Added sucessfully";
    let errorMessage = this.validate(doc);
   
    if(errorMessage){
      alert(errorMessage);
      return;
    }

    if(this.getDoc(doc.id)){
      this.deleteDoc(doc.id);
      message = "Updated sucesfully"
    }

    if (this.docs.length == 0) {
      doc.id = 1;
    } else {
      doc.id = this.docs[this.docs.length - 1].id + 1;
    }

    this.docs.push(doc);
    alert(message);
    this.close();
    console.log(this.docs);
  }

  close(){
    this.phaseService.selectPhase(0);
  }

  getDoc(id: number) {
    let index = this.getIndex(id);
    return this.docs[index];
  }

  getNumberOfDocs() {
    return this.docs.length;
  }

  getDocs() {
    return this.docs;
  }

  editDoc(id: number, updatedDoc: Doc) {
    console.log("editing doc");
    let index = this.getIndex(id);
    this.docs[index] = updatedDoc;
  }

  deleteDoc(id: number) {
    let index = this.getIndex(id);
    this.docs.splice(index, 1);
  }

  getIndex(id: number) {
    return this.docs.findIndex(i => i.id == id);
  }


  fillForm(phaseId: number, doc: any) {
    console.log(document);
    switch (phaseId) {
      case 1:
        (document.getElementById('id') as HTMLInputElement).value = doc.id;
        (document.getElementById('projectTitle') as HTMLInputElement).value = doc.details.projectTitle;
        (document.getElementById('startDate') as HTMLInputElement).value = doc.details.startDate;
        (document.getElementById('endDate') as HTMLInputElement).value = doc.details.endDate;
        (document.getElementById('projectObjectives') as HTMLInputElement).value = doc.details.projectObjectives;
        (document.getElementById('projectManager') as HTMLInputElement).value = doc.details.projectManager;
        (document.getElementById('budgetInformation') as HTMLInputElement).value = doc.details.budgetInformation;
        (document.getElementById('projectScope') as HTMLInputElement).value = doc.details.projectScope;
        break;
      case 2:
        (document.getElementById('id') as HTMLInputElement).value = doc.id;
        (<HTMLInputElement>document.getElementById("intro")).value = doc.details.intro;
        (<HTMLInputElement>document.getElementById("purpose")).value = doc.details.purpose;
        (<HTMLInputElement>document.getElementById("audience")).value = doc.details.audience;
        (<HTMLInputElement>document.getElementById("overall")).value = doc.details.overall;
        (<HTMLInputElement>document.getElementById("features")).value = doc.details.features;
        (<HTMLInputElement>document.getElementById("FileUpload")).value = doc.details.path;
        break;
      case 3:
        //TODO LATER
        (<HTMLInputElement>document.getElementById("InpuField")).value = doc.details.path;
        break;
      default:
        console.log("An error happened");
        break;
    }
  }
  
  validate(doc:any){
    let message = "";
    switch (doc.phase) {
      case 1:
        if(!doc.details.projectTitle||!doc.details.endDate||!doc.details.projectObjectives||!doc.details.projectManager||!doc.details.budgetInformation||!doc.details.projectScope||!doc.details.startDate){
          message = "Please fill all fields";
        }
        break;
      case 2:
        if(!doc.details.intro||!doc.details.purpose||!doc.details.audience||!doc.details.overall||!doc.details.features||!doc.details.path){
          message = "Please fill all fields"; 
        }
        break;
      case 3:
        // //TO TEST
        break;
      default:
        console.log("An error happened");
        break;
    }
    return message;

  }
}
