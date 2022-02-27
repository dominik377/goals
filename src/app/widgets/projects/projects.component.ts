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
  grandchildrenList: GoalItem [] = []
  testChildList: GoalItem [] = []

  constructor(private globalService: GlobalService, private projectsGuiService: ProjectsGuiService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;

    this.baseProject = this.globalService.selectedGoal;

    this.projectsGuiService.button1Subject.subscribe ( x => {
      this.button1function(x)
    })

    if(this.baseProject !== null) {
      const testParentList: GoalItem [] = []
      testParentList.push(this.baseProject)
      this.testChildList = this.getChildren(this.goalList, testParentList)
    }

    this.setGrandchildren()
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
      newGoal.status = 'undefined'

      if(x === 'addTask') {
        newGoal.actionGoalField = 'task'
      }
      if(x === 'addProject') {
        newGoal.actionGoalField = 'smallproject'
      }
      if(x === 'addProblem') {
        newGoal.actionGoalField = 'problem'
      }
    }
  }

  // checks for all elements of input List if they are children of
  getChildren(inputList: GoalItem [], parentList: GoalItem []): GoalItem [] {
    const parentIdList: number [] = parentList.map ( x => x.id)
    const returnList: GoalItem [] = []
    for(let item of inputList) {
      if(item.parentList.some(r => parentIdList.includes(r))) {
        returnList.push(item)
      }
    }
    return returnList
  }

  // sets this.grandchildrenList
  setGrandchildren(): void {
    if(this.baseProject === null) { return }

    let firstGenerationList: GoalItem [] = []
    let workingList: GoalItem [] = []
    workingList.push(this.baseProject)
    let grandChildrenList: GoalItem [] = []

    for(let i = 0; i < 20; i++) {
      grandChildrenList = this.getChildren(this.goalList, workingList)
      if ( i === 0 ) {
        firstGenerationList = [...grandChildrenList]
      }

      for(let grand of grandChildrenList) {
        if (! workingList.includes(grand)) {
          workingList.push(grand)
        }
      }
    }

    // filter out the original parents from the working list
    workingList.splice(workingList.indexOf(this.baseProject), 1)
    // filter out the first generation children
    for (let first of firstGenerationList) {
      workingList.splice(workingList.indexOf(first), 1)
    }

    console.log(firstGenerationList)
    console.log(workingList)

    this.grandchildrenList = workingList


  }


}
