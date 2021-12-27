import { Component, OnInit } from '@angular/core';
import {GoaldetailsGuiService} from "../gui.service";

@Component({
  selector: 'app-goaldetails-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.scss']
})
export class GoaldetailsGuiComponent implements OnInit {

  constructor(private goaldetailsGuiService: GoaldetailsGuiService) { }

  ngOnInit(): void {
  }

  exampleFunction(value: string) {
    this.goaldetailsGuiService.exampleFunction(value)
  }

}
