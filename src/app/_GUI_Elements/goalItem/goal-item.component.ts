import {
  Component, HostListener,
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
  @Input() colorOverride: string | null = null //  Enables setting the color directly from the parent; overrides normal color settings
  @HostListener('contextmenu', ['$event'])
  onClick(e: any) {
    this.globalService.rightclickHandler(this.Item)
    e.preventDefault();
  }


  selectedItem: GoalItem | null = null
  showPrivate: boolean []
  filterList: HighlightList;
  useFilter: boolean[];

  constructor(private globalService: GlobalService) {
    this.showPrivate = this.globalService.showPrivate
    this.filterList = this.globalService.highlightList
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
