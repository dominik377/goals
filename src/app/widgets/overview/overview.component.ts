import { Component, OnInit } from '@angular/core';

import {headerdivisionButtonInterface} from "../../_GUI_Elements/headerdivision/headerdivisionButtonInterface";
import {MainpageOverviewGuiService} from "./gui.service";

@Component({
  selector: 'app-mainpage-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tabOrSplitView: 'tab' | 'split' = 'tab'


  constructor(private mainpageOverviewGuiService: MainpageOverviewGuiService) { }

  ngOnInit(): void {
    this.mainpageOverviewGuiService.updateTabSplit.subscribe(tabOrSplit => {
      this.tabOrSplitView = tabOrSplit
    })
  }



}
