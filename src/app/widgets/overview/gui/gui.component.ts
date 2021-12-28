import { Component, OnInit } from '@angular/core';
import {MainpageOverviewGuiService} from "../gui.service";

@Component({
  selector: 'app-mainpage-overview-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.scss']
})
export class GuiComponent implements OnInit {

  constructor(private mainpageOverviewGuiService: MainpageOverviewGuiService) { }

  ngOnInit(): void {
  }

  selectView(selected: 'tab' | 'split'): any {
    this.mainpageOverviewGuiService.selectView(selected)
  }

}
