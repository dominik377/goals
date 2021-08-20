import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";

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

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  clickHandler(event: GoalItem): void {
    this.selected.emit(event)
  }

}
