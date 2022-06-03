import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../global.service";
import {GoalItem} from "../../_Model/goalItem";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchString: string = ''
  goalList: GoalItem []
  filteredList: GoalItem [] = []

  constructor(globalService: GlobalService) {
    this.goalList = globalService.goalList
  }

  ngOnInit(): void {
  }

  inputHandler(event: any): void {
    const searchString = event.target.value
    this.filteredList = []
    for(let item of this.goalList) {
      const searchLength = searchString.length
      if (item.displayName.slice(0,searchLength).toLowerCase() === searchString.toLowerCase()) {
        this.filteredList.push(item)
      }
    }
  }

}
