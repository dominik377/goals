import { Component, OnInit } from '@angular/core';
import {GoalItem} from "../../_Model/goalItem";
import {GlobalService} from "../../global.service";
import {ProjectsGuiService} from "./projects-gui.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  goalList: GoalItem[] = []
  selectedItem: GoalItem | null = null
  baseProject: GoalItem | null = null

  constructor(private globalService: GlobalService, private projectsGuiService: ProjectsGuiService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;

    this.baseProject = this.globalService.selectedGoal;

    this.projectsGuiService.button1Subject.subscribe ( x => {
      this.button1function(x)
    })

  }

  button1function(x: string): void {
    if (x !== 'null' && x !== null) {
      console.log('%c button 1 function executed', 'color:blue')
      if (this.baseProject === null) {
        alert('no Item selected')
        return
      }

      console.log(this.baseProject.id)

      const newGoal = this.globalService.createNewGoal2()
      newGoal.parentList.push(this.baseProject.id)
      newGoal.displayName = 'test subtask'
      newGoal.actionGoalField = 'task'
      newGoal.status = 'undefined'
    }
  }


}
