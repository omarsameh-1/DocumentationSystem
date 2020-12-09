import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocsService } from '../sidebar/docs.service';
import { PhasesService } from './phases.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedPhase:number = 1;

  phases:any;

  numberOfDocs:number = 0;

  constructor(private router:Router, private phasesService: PhasesService, private docsService: DocsService) { }

  ngOnInit(): void {
    this.phases = this.phasesService.getPhases();
    this.numberOfDocs = this.docsService.getNumberOfDocs();
  }

  isHomeRoute(){
    return this.router.url === '/';
  }

  selectPhase(){
    this.phasesService.selectPhase(this.selectedPhase);
  }
}
