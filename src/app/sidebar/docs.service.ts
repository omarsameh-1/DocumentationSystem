import { Injectable } from '@angular/core';
import { Doc } from '../model/doc.model';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs: Doc[] = [];

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

  editDoc(id: number, updatedDoc: Doc){
    console.log("editing doc");
    this.docs[id-1] = updatedDoc;
  }

  deleteDoc(id: number){
    this.docs.splice(id-1,1);
  }

}
