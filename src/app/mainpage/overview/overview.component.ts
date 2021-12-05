import { Component, OnInit } from '@angular/core';

import {headerdivisionButtonInterface} from "../../_GUI_Elements/headerdivision/headerdivisionButtonInterface";

@Component({
  selector: 'app-mainpage-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tabOrSplitView: 'tab' | 'split' = 'tab'
  tabOrSplitViewButtons: headerdivisionButtonInterface [] = [
    {
      label: 'tab',
      value: 'tab',
      icon: 'view_column'
    },
    {
      label: 'split',
      value: 'split',
      icon: 'verified_user'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectView(tabOrSplit: 'tab' | 'split') {
    this.tabOrSplitView = tabOrSplit
  }

}
