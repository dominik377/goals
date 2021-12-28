import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainpageOverviewGuiService {
  updateTabSplit: BehaviorSubject<'tab' | 'split'>

  constructor() {
    this.updateTabSplit = new BehaviorSubject<"tab" | "split">('split')
  }

  selectView(selected: 'tab' | 'split' ): void {
   this.updateTabSplit.next(selected)
  }
}
