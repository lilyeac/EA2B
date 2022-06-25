import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService,
    private ar: ActivatedRoute
  ) { }

  project: any = []
  apartments: any = []

  __getProject_byId(idproject: number) {
    this.ps.getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: {id: number}) => item.id == idproject)
      // console.log(this.project)
    })
  }

  __getApartments_byIdProject(idproject: number) {
    this.as.getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: {projectId: number}) => item.projectId == idproject)
      // console.log(this.apartments)
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["id"]) {
        this.__getProject_byId(p["id"])
        this.__getApartments_byIdProject(p["id"])
      }
    })
  }

}
