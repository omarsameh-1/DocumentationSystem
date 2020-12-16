import { Component, OnInit } from '@angular/core';
import { Doc } from '../model/doc.model';
import { DocsService } from '../sidebar/docs.service';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit {

  docs: Doc[] = [];
  
  constructor(private docsService:DocsService) { }

  ngOnInit(): void {
  }

}
