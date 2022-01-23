import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../global.service";
import {GoalItem} from "../../_Model/goalItem";

@Component({
  selector: 'app-mainpage-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  goalList: GoalItem[] = [];
  selectedItem: GoalItem | null = null;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

}
