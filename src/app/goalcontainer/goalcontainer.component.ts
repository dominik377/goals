import {Component, Input, OnInit} from '@angular/core';
import {GoalItem} from "../_Model/goalItem";

@Component({
  selector: 'app-goalcontainer',
  templateUrl: './goalcontainer.component.html',
  styleUrls: ['./goalcontainer.component.scss']
})
export class GoalcontainerComponent implements OnInit {
  @Input() goalList: GoalItem [] = []
  @Input() name = ''

  constructor() { }

  ngOnInit(): void {
  }

}
