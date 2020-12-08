import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhasesService } from './phases.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedPhase:number = 1;

  phases:any;

  constructor(private router:Router, private phasesService: PhasesService) { }

  ngOnInit(): void {
    this.phases = this.phasesService.getPhases();
  }

  isHomeRoute(){
    return this.router.url === '/';
  }

  selectPhase(){
    this.phasesService.selectPhase(this.selectedPhase);
  }
}
