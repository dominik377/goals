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

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })

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



      if(x === 'addTask') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'task'
      }
      if(x === 'addProject') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'smallproject'
      }
      if(x === 'addRisk') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'risk'
        newGoal.actionGoalFieldSecondary = 'permanent'
      }
      if(x === 'addAssociatedGoal') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'associatedGoal'
        newGoal.actionGoalFieldSecondary = 'primary'
      }
      if(x === 'addRoadblock') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'roadblock'
        newGoal.actionGoalFieldSecondary = 'primary'
      }
      if(x === 'addChallenge') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = ''
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'challenge'
        newGoal.actionGoalFieldSecondary = 'primary'
      }
      if(x === 'addAssumption') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'assumption'
        newGoal.actionGoalFieldSecondary = 'primary'
      }
      if(x === 'addExperiment') {
        const newGoal = this.globalService.createNewGoal2()
        newGoal.parentList.push(this.baseProject.id)
        newGoal.displayName = 'test subtask'
        newGoal.status = 'undefined'

        newGoal.actionGoalField = 'experiment'
        newGoal.actionGoalFieldSecondary = 'primary'
      }
      if(x === 'addMeasure') {

        console.log(this.selectedItem)
        console.log(this.selectedItem?.displayName)
        console.log(this.selectedItem?.actionGoalField)

        // make the newly created measure a child of the active associatedGoal
        if (this.selectedItem !== null && this.selectedItem.actionGoalField === 'associatedGoal') {
          // we need to store the id of the selected associatedGoal here, because after creating the new goalItem, it is set to be the selected goal
          const parentId = this.selectedItem.id

          const newGoal = this.globalService.createNewGoal2()
          newGoal.parentList.push(this.baseProject.id)
          newGoal.displayName = 'test subtask'
          newGoal.status = 'undefined'

          newGoal.actionGoalField = 'measure'

          newGoal.parentList.push(parentId)
          console.log('is associated Goal')
          console.log(newGoal.parentList)
        } else {
          alert ('no associated goal defined')
        }


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
