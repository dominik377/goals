import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsGuiService {

  button1Subject: BehaviorSubject<string>

  constructor() {
    this.button1Subject = new BehaviorSubject<string>('null')
  }

  activateButton1 (x: string): void {
    if(x !== 'null') {
      console.log('%c service: b1 function activated', 'color:green')
      this.button1Subject.next(x)
    }
  }


}
