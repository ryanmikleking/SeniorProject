import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { API } from 'aws-amplify';


@Component({
    selector: 'app-project-info',
    templateUrl: 'Project-info.components.html',
    styleUrls: ['Project-info.components.css']
})

export class ProjectInfoComponent implements AfterViewInit{

    responseArray:any=[];
    userData:any={};
    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
      
    }
    constructor(private route: ActivatedRoute) {}
    projectDesc:any;


    ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('projectID');
      console.log(id)
      let userData = JSON.parse(sessionStorage.getItem("userData"));
      userData.ListOfProjectDetails.forEach(element => {
        if(element.projectID==id){
          this.projectDesc=element
        }
      });
}
}