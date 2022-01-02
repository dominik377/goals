import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoalItem} from "../../../_Model/goalItem";
import {GlobalService} from "../../../global.service";
import {actionGoalField} from "../../../_Model/actionGoalField";

@Component({
  selector: 'app-goalcontainer',
  templateUrl: './goalcontainer.component.html',
  styleUrls: ['./goalcontainer.component.scss']
})
export class GoalcontainerComponent implements OnInit {
  @Input() goalList: GoalItem [] = []
  @Input() name = ''
  @Output() selected: EventEmitter<GoalItem> = new EventEmitter()
  selectedItem: GoalItem | null = null
  @Input() itemFilter : string | 'funded' | 'semi-funded' | 'near' | 'far' | null = null
  @Input() actionGoalField: actionGoalField = 'undefined'
  showPrivate: boolean []

  constructor(private globalService: GlobalService) {
    this.showPrivate = this.globalService.showPrivate
  }

  ngOnInit(): void {
    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  clickHandler(event: GoalItem): void {
    this.selected.emit(event)
  }

}
