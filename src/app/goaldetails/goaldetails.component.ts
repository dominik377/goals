import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
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
  @Output() ok: EventEmitter<GoalItem> = new EventEmitter();

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
      this.ok.emit(this.item)
    }
  }

}
