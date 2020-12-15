import { Injectable } from '@angular/core';
import { Doc } from '../model/doc.model';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  docs: Doc[] = [];

  constructor() { }

  addNewDoc(doc: Doc){
    if(this.docs.length == 0){
      doc.id = 1;
    }else{
      doc.id = this.docs[this.docs.length-1].id + 1;
    }

    this.docs.push(doc);
    console.log(this.docs);
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
    let index = this.getIndex(id);
    this.docs[index] = updatedDoc;
  }

  deleteDoc(id: number){
    let index = this.getIndex(id);
    this.docs.splice(index,1);
  }

  getIndex(id: number){
    return this.docs.findIndex(i => i.id == id);
  }

}
