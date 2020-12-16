import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Doc } from 'src/app/model/doc.model';
import { DocsService } from 'src/app/sidebar/docs.service';

@Component({
  selector: 'app-design-phase',
  templateUrl: './design-phase.component.html',
  styleUrls: ['./design-phase.component.css']
})
export class DesignPhaseComponent implements OnInit {

  files_: string[] = [];
  toAdd:Doc[] = [];

  constructor(private docsService: DocsService) {

  }

  ngOnInit() {
  }

  AddDocument() {
    // doc means image as a doc for design 
    this.files_.push('');
  }

  RemoveDocument(i: number) {
    this.files_.splice(i, 1);
  }
  handleUpload(event:any){
    let doc = <Doc>{
      id: parseInt((document.getElementById('id') as HTMLInputElement ).value),
      name: event.target.files[0].name,
      type:'image',
      phase: 3,
      details:{
        path: event.target.value
      }
    }
    this.toAdd.push(doc);
 }

 

  Save() {
    this.toAdd.forEach((file)=>{
      this.docsService.addNewDoc(file);      
    });
    this.files_ = [];
    this.toAdd = [];
  }

}
