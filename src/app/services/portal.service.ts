import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  portalSubject: BehaviorSubject<any>

  constructor() {
    this.portalSubject = new BehaviorSubject<any>(null)
  }
}
