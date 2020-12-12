import { Component, OnInit } from '@angular/core';
import {home} from '../model/home.model';

@Component({
  selector: 'app-design-phase',
  templateUrl: './design-phase.component.html',
  styleUrls: ['./design-phase.component.css']
})
export class DesignPhaseComponent implements OnInit {

  home=new home();
  dataaray:any[]=[];
  fileData:any=null;
  fileName:any=null;
  previewUrl:any=null;
  constructor(){}
  ngOnInit(){
    this.home=new home();
    this.dataaray.push(this.home);
  }
  addDocument(){
    this.home=new home();
    this.dataaray.push(this.home);

  }
  
  removeDocument(index:number){
    this.dataaray.splice(index);
  }
  fileEvent(fileInput: any){
    this.fileData = fileInput.target.files[0];
     this.fileName = this.fileData.name;
     this.preview();
  }
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}
  onsubmit(){
    localStorage.setItem('home', this.home.file_); // setting
    console.log(localStorage.getItem('home')); // getting
    console.log(this.fileName);
  }

}
