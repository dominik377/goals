import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsGuiService {

  button1Subject: ReplaySubject<string>

  constructor() {
    this.button1Subject = new ReplaySubject<string>()
  }

  activateButton1 (x: string): void {
    console.log('%c service: b1 function activated', 'color:green')
    this.button1Subject.next(x)
  }


}
