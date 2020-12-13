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
    fileName: '',
    Path:''
  }];
  constructor() {

  }

  ngOnInit() {

  }

  addAddress() {
    this.files_.push({
      id: this.files_.length + 1,
      fileName: '',
      Path:''
      
    });
  }

  removeAddress(i: number) {
    this.files_.splice(i, 1);
  }
  handleUpload(event:any){
    for(let i=0;i<this.addAddress.length+1;i++){
      this.files_[i].Path = event.target.value;
      this.files_[i].fileName = event.target.files[i].name;
    }
 }

 

  logValue() {
    console.log(this.files_);
    
  }

}
