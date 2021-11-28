import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  selectedView: 'overview' | 'test' = 'overview';

  constructor() { }

  ngOnInit(): void {
  }

  selectView(selected: 'overview' | 'test') {
    this.selectedView = selected
  }

}
