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
  constructor(private docsService: DocsService) {

  }

  ngOnInit() {
    this.files_ = this.docsService.getDocs();
  }

  AddDocument() {
    let doc = <Doc>{
      id: 0,
      name: '',
      type:'image',
      details:{
        path:''
      }
    }
    this.files_.push(doc);
  }

  RemoveDocument(i: number) {
    this.files_.splice(i, 1);
  }
  handleUpload(event:any){
    for(let i=0;i<this.files_.length+1;i++){
      this.files_[i].details = {
        path: event.target.value
      };
      this.files_[i].name = event.target.files[i].name;
    }
 }

 

  Save() {
    this.files_.forEach((file)=>{
      console.log(file);
      this.docsService.addNewDoc(file);
    });
  }

}
