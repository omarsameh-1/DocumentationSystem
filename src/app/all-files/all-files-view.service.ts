import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllFilesViewService {

  imgPath: any;

  constructor() { }

  setImgPath(imgPath: any){
    this.imgPath = imgPath;
  }

  viewDoc(){
    return this.imgPath;
  }

}
