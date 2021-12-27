import {Component, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goals';

  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer,
  ){
    this.matIconRegistry.addSvgIcon(
      'custom_split',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/split_19.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'custom_tab',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/tab_4.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'custom_overview',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/overview_1.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'custom_details',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/details_1.svg')
    );
  }
}
