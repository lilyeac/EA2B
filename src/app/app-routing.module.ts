import { NgModule, ResolvedReflectiveFactory } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentListComponent } from "./admin/apartment/apartment-list/apartment-list.component";
import { ApartmentNewComponent } from "./admin/apartment/apartment-new/apartment-new.component";
import { ProjectListComponent } from "./admin/project/project-list/project-list.component";
import { ProjectNewComponent } from "./admin/project/project-new/project-new.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";
import { TeamComponent } from "./pages/team/team.component";

const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'aboutus', component: AboutusComponent},
    {path:'team', component: TeamComponent},
    { path: 'project/:id', component: ProjectComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'admin/project/new', component: ProjectNewComponent },
    { path: 'admin/project/list', component: ProjectListComponent },
    { path: 'admin/apartment/new', component:ApartmentNewComponent },
    { path: 'admin/apartment/list', component: ApartmentListComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule{}