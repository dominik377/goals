import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import * as _lodash from 'lodash';

import {GoalItem} from "../_Model/goalItem";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-goaldetails',
  templateUrl: './goaldetails.component.html',
  styleUrls: ['./goaldetails.component.scss']
})
export class GoaldetailsComponent {
  @Input() item: GoalItem | null = null;
  @Output() ok: EventEmitter<GoalItem> = new EventEmitter();

  constructor(private globalService: GlobalService) { }

  okHandler(): void {
    if (this.item !== null) {
      this.ok.emit(this.item)
    }
  }

}
