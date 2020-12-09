import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs:{ id: number, name: string, details: {}}[] = [
    {id: 1, name: "charter doc", details: {}},
    {id: 2, name: "srs", details: {}},
    {id: 3, name: "sds", details: {}} 
  ];

  constructor() { }

  addNewDoc(doc: {id: number, name: string, details: {}}){
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
