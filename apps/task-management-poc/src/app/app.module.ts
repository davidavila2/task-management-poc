import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@task-management-poc/material';
import { CoreDataModule } from '@task-management-poc/core-data';
import { NotFoundModule } from '@task-management-poc/not-found';
import { UiLoginModule } from '@task-management-poc/ui-login';
import { UiSignupModule } from '@task-management-poc/ui-signup';
import { UiToolbarModule } from '@task-management-poc/ui-toolbar';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksDetailsComponent } from './tasks/tasks-details/tasks-details.component';

import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    NotFoundModule,
    UiLoginModule,
    UiSignupModule,
    UiToolbarModule,
    RoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    TasksListComponent,
    TasksDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
