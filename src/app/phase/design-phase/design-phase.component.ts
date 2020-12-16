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

  public files_: Doc[] = new Array<Doc>();
  doc = <Doc>{
    id : 0 ,
    name : '',
    type:'name',
    details :{
      path: ''
    }
  }
  constructor(private docsService: DocsService) {

  }

  ngOnInit() {
    //this.files_ = this.docsService.getDocs();
  }

  AddDocument() {
    // doc means image as a doc for design 
    // let doc = <Doc>{
    //   id: 0,
    //   name: '',
    //   type:'image',
    //   details:{
    //     path:''
    //   }
    // }
    this.files_.push(this.doc);
  }

  RemoveDocument(i: number) {
    this.files_.splice(i, 1);
  }
  handleUpload(event:any){
    // for(let i=0;i<this.files_.length+1;i++){
    //   this.files_[i].details = {
    //     path: event.target.value
    //   };
    //   this.files_[i].name = event.target.files[i].name;
    // }
    // let doc = <Doc>{
    //   id: 0,
    //   name: '',
    //   type:'image',
    //   details:{
    //   path: event.target.value
    //   }
    // }
    this.doc.details.path = event.target.value; 
    this.files_.push(doc);
  //   console.log(event.target.value)
  //   this.files_.forEach(file => {
  //     file.details.path = event.target.value ;
  //  //   file.name = event.target.file.name ;
  //   });
 }

 

  Save() {
    
    console.log(this.files_);
    this.files_.forEach((file)=>{
      //console.log(file);
      this.docsService.addNewDoc(file);
      
    });
    this.files_ = [];
  }

}
