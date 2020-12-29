import { Component, OnInit } from '@angular/core';
import { AllFilesViewService } from '../all-files-view.service';

@Component({
  selector: 'app-all-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  src :string = '';

  constructor(private allFilesViewService: AllFilesViewService) { }

  ngOnInit(): void {
  }

  viewDoc(){
    this.src = this.allFilesViewService.viewDoc();
    console.log(`src is ${this.src}`);
  }

}
