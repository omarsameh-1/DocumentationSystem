import { Component, OnInit } from '@angular/core';
import { PhasesService } from '../header/phases.service';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.css']
})
export class PhaseComponent implements OnInit {

  constructor(private phaseService: PhasesService) { }

  ngOnInit(): void {
  }

  getPhaseView(){
    return this.phaseService.getPhase();
  }

}
