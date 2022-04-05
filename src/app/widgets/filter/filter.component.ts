import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../global.service";
import {HighlightList} from "../../_Model/highlightList";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss']
})
export class FilterComponent implements OnInit {

  test = false;
  highlightList : HighlightList
  useFilter: boolean []

  constructor(private globalService:GlobalService) {
    this.highlightList = globalService.highlightList
    this.useFilter = this.globalService.useFilter
  }

  ngOnInit(): void {

  }

}