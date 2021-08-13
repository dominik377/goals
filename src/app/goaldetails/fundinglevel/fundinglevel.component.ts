import {Component, Input, OnInit} from '@angular/core';

import {FundingLevelItem} from "../../_Model/fundingLevelItem";

@Component({
  selector: 'app-goaldetails-fundinglevel',
  templateUrl: './fundinglevel.component.html',
  styleUrls: ['./fundinglevel.component.scss']
})
export class FundinglevelComponent implements OnInit {
  @Input() item: FundingLevelItem | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
