import { Injectable } from '@angular/core';
import { Doc } from '../model/doc.model';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs: Doc[] = [
    {id: 1, name: "charter doc", type: "", details: {}},
    {id: 2, name: "srs",type: "", details: {}},
    {id: 3, name: "sds", type: "", details: {}} 
  ];

  constructor() { }

  addNewDoc(doc: Doc){
    this.docs.push(doc);
  }

  getDoc(id: number){
    return this.docs[id-1];
  }

  getNumberOfDocs(){
    return this.docs.length;
  }

  getDocs(){
    return this.docs;
  }

  editDoc(id: number){
    console.log("editing doc");
  }

  deleteDoc(id: number){
    console.log("deleting doc");
  }

}
