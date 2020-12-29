import { Injectable } from '@angular/core';
import { Doc } from '../model/doc.model';

@Injectable({
  providedIn: 'root'
})
export class PhasesService {

  chosenPhase: number = 0;

  phases = [
    {id: 1, name: "Project Initiation Phase"},
    {id: 2, name: "Requirements Phase"},
    {id: 3, name: "Design Phase"}
  ];

  constructor() { }

  getPhases(){
    return this.phases;
  }

  getPhase(){
    if(this.chosenPhase == 0)
      return "";
    return this.phases[this.chosenPhase-1].id;
  }

  selectPhase(phaseId: number){
    this.chosenPhase = phaseId;
  }

}
