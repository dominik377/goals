import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";
import {GoaldetailsGuiService} from "./gui.service";

@Component({
  selector: 'app-goaldetails',
  templateUrl: './goaldetails.component.html',
  styleUrls: ['./goaldetails.component.scss']
})
export class GoaldetailsComponent implements OnInit {
  @Input() item: GoalItem | null = null;
  @Output() ok: EventEmitter<GoalItem> = new EventEmitter();
  @ViewChild('displaynameRef') displaynameRef: any

  constructor(private globalService: GlobalService, private goaldetailsGuiService: GoaldetailsGuiService) {
    this.globalService.focusOnGoalDetails.subscribe(next => {
      if(next !== null) {
        setTimeout(() => {
          if (this.item !== null) {
            this.displaynameRef.nativeElement.focus()
          }
        }, 100 )
      }})
  }

  ngOnInit(): void {
    this.goaldetailsGuiService.exampleSubject.subscribe( (next: string) => {
      alert(next)
    })
  }

  okHandler(): void {
    if (this.item !== null) {
      this.ok.emit(this.item)
    }
  }

}
