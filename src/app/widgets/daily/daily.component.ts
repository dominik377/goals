import { Component, OnInit } from '@angular/core';
import {DailyItem} from "../../_Model/dailyItem";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  content: DailyItem;


  constructor(private  globalService: GlobalService) {
    this.content = this.globalService.globalDailyItem
    console.log(this.content)
  }

  ngOnInit(): void {
  }

}
