import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {GlobalService} from "../../global.service";
import {GoalItem} from "../../_Model/goalItem";
import {HighlightList} from "../../_Model/highlightList";

@Component({
  selector: 'app-gui-goal-item',
templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss']
})
export class GoalItemComponent implements OnInit {
 @Input() Item: GoalItem | null = null


  selectedItem: GoalItem | null = null
  showPrivate: boolean []
  highlightsList: HighlightList;
  useFilter: boolean[];

  constructor(private globalService: GlobalService) {
    this.showPrivate = this.globalService.showPrivate
    this.highlightsList = this.globalService.highlightList
    this.useFilter = this.globalService.useFilter
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
