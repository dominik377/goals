import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tabOrSplitView: 'tab' | 'split' = 'tab'

  constructor() { }

  ngOnInit(): void {
  }

  selectView(tabOrSplit: 'tab' | 'split') {
    this.tabOrSplitView = tabOrSplit
  }

}
