import {Component, Input, OnInit} from '@angular/core';
import {GoalItem} from "../../../_Model/goalItem";
import {GlobalService} from "../../../global.service";

@Component({
  selector: 'app-mainsystem',
  templateUrl: './mainsystem.component.html',
  styleUrls: ['./mainsystem.component.scss']
})
export class MainsystemComponent implements OnInit {
  @Input() item: GoalItem | null = null
  goalList: GoalItem[] = []

  constructor(private globalService: GlobalService) {
    this.goalList = this.globalService.goalList;
  }

  ngOnInit(): void {
  }

}
