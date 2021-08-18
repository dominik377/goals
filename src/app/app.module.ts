import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoaldetailsComponent } from './goaldetails/goaldetails.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { GoalcontainerComponent } from './goalcontainer/goalcontainer.component';
import {MatListModule} from "@angular/material/list";
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestComponent } from './test/test.component';
import {TestGoaldetailsComponent} from "./test/goaldetails/goaldetails.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import { FundinglevelComponent } from './goaldetails/fundinglevel/fundinglevel.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    GoaldetailsComponent,
    GoalcontainerComponent,
    MainpageComponent,
    TestComponent,
    TestGoaldetailsComponent,
    FundinglevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
