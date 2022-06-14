import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './pages/team/team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectNewComponent } from './admin/project/project-new/project-new.component';
import { ProjectListComponent } from './admin/project/project-list/project-list.component';
import { ApartmentNewComponent } from './admin/apartment/apartment-new/apartment-new.component';
import { ApartmentListComponent } from './admin/apartment/apartment-list/apartment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    TeamComponent,
    ProjectNewComponent,
    ProjectListComponent,
    ApartmentNewComponent,
    ApartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
