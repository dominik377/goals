import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoaldetailsGuiService {
  exampleSubject: ReplaySubject<any>

  constructor() {
    this.exampleSubject = new ReplaySubject<any>()
  }

  exampleFunction(value: string): void {
    this.exampleSubject.next(value)
  }

}
