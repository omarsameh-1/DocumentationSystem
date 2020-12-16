import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doc } from '../model/doc.model';
import { DocsService } from './docs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  docs: Doc[] = [];

  constructor(private docsService: DocsService, private router:Router) { }

  ngOnInit(): void {
    this.docs = this.docsService.getDocs();
  }

  getImageDocs(){
    return this.docsService.getDocs().filter(doc => doc.type == "image");
  }

  isAllFilesRoute(){
    return this.router.url === '/all';
  }

  deleteDoc(id: number){
    this.docsService.deleteDoc(id);
  }

  editDoc(id: number, editedDoc:Doc){
    this.docsService.editDoc(id, editedDoc);
  }
  
  showDoc(id: number){
    let doc = this.docsService.getDoc(id);
    //Show doc on page
    console.log(`Here you go: ${doc}`);
    
  }

  getNumberOfDocs(){
    return this.docsService.getNumberOfDocs();
  }

}
