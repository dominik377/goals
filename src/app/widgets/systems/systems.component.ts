import {Component, OnInit, ViewChild} from '@angular/core';
import {GoalItem} from "../../_Model/goalItem";
import {actionGoalField} from "../../_Model/actionGoalField";
import {actionGoalFieldListAbridged} from "../../_Model/actionGoalFieldListAbridged";
import {GlobalService} from "../../global.service";
import {Portal, TemplatePortal} from "@angular/cdk/portal";
import {PortalService} from "../../services/portal.service";

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {
  // @ts-ignore
  @ViewChild('myTemplate') myTemplate: TemplatePortal<any>;
  selectedItem: GoalItem | null = null;
  goalList: GoalItem [] = [];
  _portal!: Portal<any>;

  constructor(private globalService: GlobalService, private portalService: PortalService) {}

  ngOnInit(): void {
    this.goalList = this.globalService.goalList;

    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })

    setTimeout(() => {
      this._portal = this.myTemplate
      this.portalService.portalSubject.next(this._portal)
    }, 2000);
  }

  selectedHandler(event: GoalItem) {
    this.globalService.selectedGoal = event
    this.globalService.publishGoals()
  }

  testSystems(): void {
    alert(' Systems test')
  }

}
