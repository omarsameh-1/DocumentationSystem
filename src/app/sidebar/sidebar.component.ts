import { Component, OnInit } from '@angular/core';
import { DocsService } from './docs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  docs: {id: number, name: string, details: {}}[] = [];

  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
    this.docs = this.docsService.getDocs();
  }

  addDoc(doc: {id: number, name: string, details: {}}){
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

}
