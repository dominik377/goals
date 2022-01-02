import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-daily-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  @Input() header: string = ''
  @Input() count: number = 3

  constructor() { }

  ngOnInit(): void {
  }

}
