import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoaldetailsComponent } from './goaldetails/goaldetails.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { GoalcontainerComponent } from './mainpage/goalcontainer/goalcontainer.component';
import {MatListModule} from "@angular/material/list";
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestComponent } from './test/test.component';
import {TestGoaldetailsComponent} from "./test/goaldetails/goaldetails.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";

import {JuicynessColorPipe} from './mainpage/goalcontainer/JuicynessColorPipe'
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SplitviewComponent } from './mainpage/splitview/splitview.component';
import { TabviewComponent } from './mainpage/tabview/tabview.component';


@NgModule({
  declarations: [
    AppComponent,
    GoaldetailsComponent,
    GoalcontainerComponent,
    MainpageComponent,
    TestComponent,
    TestGoaldetailsComponent,
    JuicynessColorPipe,
    SplitviewComponent,
    TabviewComponent
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
        MatInputModule,
        MatButtonModule,
        MatBadgeModule,
        HttpClientModule,
        MatTabsModule,
        MatSnackBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
