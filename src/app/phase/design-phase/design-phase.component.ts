import { Component, OnInit } from '@angular/core';
import { DocsService } from 'src/app/sidebar/docs.service';

@Component({
  selector: 'app-design-phase',
  templateUrl: './design-phase.component.html',
  styleUrls: ['./design-phase.component.css']
})
export class DesignPhaseComponent implements OnInit {

  public files_: any[] = [{
    id: 1,
    name: '',
    type:'image',
    details:{
      path:''
    }
  }];
  constructor(private docsService: DocsService) {

  }

  ngOnInit() {

  }

  AddDocument() {
    this.files_.push({
      id: this.docsService.getNumberOfDocs() + 1,
      name: '',
      type:'image',
      details:{
        path:''
      }
      
    });
  }

  RemoveDocument(i: number) {
    this.files_.splice(i, 1);
  }
  handleUpload(event:any){
    for(let i=0;i<this.files_.length+1;i++){
      this.files_[i].details.path = event.target.value;
      this.files_[i].name = event.target.files[i].name;
    }
 }

 

  Save() {
    this.files_.forEach((file)=>{
      this.docsService.addNewDoc(file);
    });
  }

}
