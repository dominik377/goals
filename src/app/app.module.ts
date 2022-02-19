import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoaldetailsComponent } from './widgets/goaldetails/goaldetails.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { GoalcontainerComponent } from './widgets/overview/goalcontainer/goalcontainer.component';
import {MatListModule} from "@angular/material/list";
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestComponent } from './_test/test.component';
import {TestGoaldetailsComponent} from "./_test/goaldetails/goaldetails.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";

import {JuicynessColorPipe} from './widgets/overview/goalcontainer/JuicynessColorPipe';
import {FundingCategoryNamePipe} from '././_Model/FundingCategoryNamePipe';
import {ActionGoalFieldToSecondaryPipe} from "./_Model/ActionGoalFieldToSecondaryPipe";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SplitviewComponent } from './widgets/overview/splitview/splitview.component';
import { TabviewComponent } from './widgets/overview/tabview/tabview.component';
import { OverviewComponent } from './widgets/overview/overview.component';
import { HeaderdivisionComponent } from './_GUI_Elements/headerdivision/headerdivision.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TestcomponentComponent } from './_test/testcomponent/testcomponent.component';
import {TestComponentGuiComponent} from './_test/testcomponent/gui/gui.component';
import { GuiComponent } from './widgets/overview/gui/gui.component';
import {GoaldetailsGuiComponent} from "./widgets/goaldetails/gui/gui.component";
import { DailyComponent } from './widgets/daily/daily.component';
import { DivisionComponent } from './widgets/daily/division/division.component';
import { SubgoalsComponent } from './widgets/subgoals/subgoals.component';
import { ActionsComponent } from './widgets/actions/actions.component';
import {ActionsGuiComponent} from "./widgets/actions/gui/actions-gui.component";
import { GoalItemComponent } from './_GUI_Elements/goalItem/goal-item.component';
import {ActionGoalFieldToStatusPipe} from "./_Model/actionGoalFieldToStatusPipe";
import { ProjectsComponent } from './widgets/projects/projects.component';
import { StagesComponent } from './widgets/projects/stages/stages.component';
import { VariantsComponent } from './widgets/projects/variants/variants.component';
import { SubprojectsComponent } from './widgets/projects/subprojects/subprojects.component';
import { TasksComponent } from './widgets/projects/tasks/tasks.component';
import { CardComponent } from './_GUI_ELEMENTS/card/card.component';
import { Grid4Component } from './_GUI_ELEMENTS/grid4/grid4.component';
import {ProjectsGuiComponent} from "./widgets/projects/gui/gui.component";


@NgModule({
  declarations: [
    AppComponent,
    GoaldetailsComponent,
    GoalcontainerComponent,
    MainpageComponent,
    TestComponent,
    TestGoaldetailsComponent,
    JuicynessColorPipe,
    FundingCategoryNamePipe,
    ActionGoalFieldToSecondaryPipe,
    ActionGoalFieldToStatusPipe,
    SplitviewComponent,
    TabviewComponent,
    OverviewComponent,
    HeaderdivisionComponent,
    TestcomponentComponent,
    TestComponentGuiComponent,
    GuiComponent,
    GoaldetailsGuiComponent,
    DailyComponent,
    DivisionComponent,
    SubgoalsComponent,
    ActionsComponent,
    ActionsGuiComponent,
    GoalItemComponent,
    ProjectsComponent,
    StagesComponent,
    VariantsComponent,
    SubprojectsComponent,
    TasksComponent,
    CardComponent,
    Grid4Component,
    ProjectsGuiComponent

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
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
