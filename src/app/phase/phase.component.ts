import { Component, OnInit } from '@angular/core';
import { PhasesService } from '../header/phases.service';
import { Doc } from '../model/doc.model';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.css']
})
export class PhaseComponent implements OnInit {

  edit : Boolean = false;

  constructor(private phaseService: PhasesService) { }

  ngOnInit(): void {
  }

  getPhaseView(){
    return this.phaseService.getPhase();
  }

  //close button
  close(){
    this.phaseService.selectPhase(0);
  }

  editPhase(doc: Doc){
    
  }

}
