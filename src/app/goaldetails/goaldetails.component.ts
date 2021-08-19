import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import * as _lodash from 'lodash';

import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-goaldetails',
  templateUrl: './goaldetails.component.html',
  styleUrls: ['./goaldetails.component.scss']
})
export class GoaldetailsComponent implements OnInit {
  @Input() item: GoalItem | null = null;

  constructor(private globalService: GlobalService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.globalService.selectedGoalUpdated.subscribe((next) => {
      if (next === true) {
        this.cd.markForCheck();
      }
    })
  }

  inputChangeHandler($event: any, variable: any, item: any): void {
    const evalString = `${variable} = $event.target.value`
    eval (evalString)
    console.log($event.target.value)
    this.globalService.sendSelectedGoalUpdatedSignal()
  }

  okHandler(): void {
    if (this.item !== null) {
      _lodash.remove(this.globalService.fundedList, this.item)
      _lodash.remove(this.globalService.semifundedList, this.item)
      _lodash.remove(this.globalService.nearList, this.item)
      _lodash.remove(this.globalService.farList, this.item)
      switch (this.item.categoryA){
        case 'funded':
          this.globalService.fundedList.push (this.item)
          break;
        case 'semi-funded':
          this.globalService.semifundedList.push (this.item)
          break;
        case 'near':
          this.globalService.nearList.push (this.item)
          break;
        case 'far':
          this.globalService.farList.push (this.item)
          break;
      }
    }
  }

}
