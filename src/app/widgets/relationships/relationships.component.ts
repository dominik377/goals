import {Component, Input, OnInit} from '@angular/core';
import {GoalItem} from "../../_Model/goalItem";
import {ParentChildRelationship} from "../../_Model/parentChildRelationship";

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})
export class RelationshipsComponent implements OnInit {
  @Input() item: GoalItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  deleteRelationship(relationship: ParentChildRelationship): void {
    if(this.item === null) {return}
    this.item.complexChildList = this.item.complexChildList.filter (x => x !== relationship )
  }

}
