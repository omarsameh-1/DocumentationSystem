import { Component, OnInit } from '@angular/core';
import { Doc } from '../model/doc.model';
import { DocsService } from './docs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  docs: Doc[] = [];

  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
    this.docs = this.docsService.getDocs();
  }

  addDoc(doc: Doc){
    this.docsService.addNewDoc(doc);
  }

  deleteDoc(id: number){
    this.docsService.deleteDoc(id);
  }

  editDoc(id: number){
    this.docsService.editDoc(id);
  }
  
  showDoc(event: any){
    let id = event.target.id;
    let doc = this.docsService.getDoc(id);
    //Show doc on page
  }

  getNumberOfDocs(){
    return this.docsService.getNumberOfDocs();
  }

}
