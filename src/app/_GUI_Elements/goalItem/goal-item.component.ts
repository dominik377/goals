import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {GlobalService} from "../../global.service";
import {GoalItem} from "../../_Model/goalItem";

@Component({
  selector: 'app-gui-goal-item',
templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss']
})
export class GoalItemComponent implements OnInit {
 @Input() Item: GoalItem | null = null


  selectedItem: GoalItem | null = null
  showPrivate: boolean []

  constructor(private globalService: GlobalService) {
    this.showPrivate = this.globalService.showPrivate
  }

  ngOnInit(): void {
    this.globalService.getSelectedGoal.subscribe( (next: GoalItem | null) => {
      this.selectedItem = next;
    })
  }

  clickHandler(event: GoalItem): void {
    this.globalService.selectedGoal = event
    this.globalService.publishGoals()
  }


  }
