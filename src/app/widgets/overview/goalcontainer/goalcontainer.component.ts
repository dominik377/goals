import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoalItem} from "../../../_Model/goalItem";
import {GlobalService} from "../../../global.service";
import {actionGoalField} from "../../../_Model/actionGoalField";

@Component({
  selector: 'app-goalcontainer',
  templateUrl: './goalcontainer.component.html',
  styleUrls: ['./goalcontainer.component.scss']
})
export class GoalcontainerComponent {
  @Input() goalList: GoalItem [] = []
  @Input() name = ''
  @Input() itemFilter : string | 'funded' | 'semi-funded' | 'near' | 'far' | null = null
  @Input() actionGoalField: actionGoalField = 'undefined'
  showPrivate: boolean []

  constructor(private globalService: GlobalService) {
    this.showPrivate = this.globalService.showPrivate
  }

}
