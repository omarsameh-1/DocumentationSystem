import { Component, OnInit } from '@angular/core';
import { DocsService } from 'src/app/sidebar/docs.service';

@Component({
  selector: 'app-all-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  src :string = '';
  chosenDoc: number = 0;

  constructor(private docsService: DocsService ) { }

  ngOnInit(): void {
  }

  viewDoc(){
    this.src = this.docsService.getDoc(this.chosenDoc).details.path!;
  }

}
