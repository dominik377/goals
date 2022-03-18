import {Component, Input, OnInit} from '@angular/core';
import {GoalItem} from "../../../_Model/goalItem";
import {GlobalService} from "../../../global.service";

@Component({
  selector: 'app-projects-item-with-measures',
  templateUrl: './item-with-measures.component.html',
  styleUrls: ['./item-with-measures.component.scss']
})
export class ItemWithMeasuresComponent implements OnInit {
  @Input() parentItem: GoalItem | null = null
  goalList: GoalItem [] = []

  constructor(private globalService: GlobalService) {
    this.goalList = globalService.goalList
  }

  ngOnInit(): void {
  }

}
