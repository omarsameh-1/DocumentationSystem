import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent implements OnInit {
ALL_FILES = [{
   fileName: "UMLclass",
   path: "./all-files/class.jpg"
  },
   {
     fileName: "UMLusecase",
     path: "./all-files/usecase.png"
   },
   {
     fileName: "UMLactivity",
     path: "./all-files/activity.png"
   }
] 


  constructor() { 
    
  }
  

  ngOnInit(): void {
  }

}
