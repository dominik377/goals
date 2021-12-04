import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gui-headerdivision',
  templateUrl: './headerdivision.component.html',
  styleUrls: ['./headerdivision.component.scss']
})
export class HeaderdivisionComponent implements OnInit {
  @Input() labelList: string [] = []
  @Input() header: string = ''
  @Output() clickEmitter = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  buttonHandler(e: any): void {
    this.clickEmitter.emit(e)
  }

}
