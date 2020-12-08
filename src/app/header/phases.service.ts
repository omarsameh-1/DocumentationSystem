import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhasesService {

  chosenPhase: number = 1;

  phases = [
    {id: 1, name: "Project Initiation Phase"},
    {id: 2, name: "Requirements Phase"},
    {id: 3, name: "Design Phase"}
  ];

  constructor() { }

  getPhases(){
    return this.phases;
  }

  selectPhase(phaseId: number){
    this.chosenPhase = phaseId;
    console.log(`phase chosen : ${this.phases[phaseId-1].name}`);
  }

}
