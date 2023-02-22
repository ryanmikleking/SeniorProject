import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { API } from 'aws-amplify';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
// const ListOfProjectDetail:{
//   images:string
// };


export class TableComponent implements OnInit {

  params = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {}
  };
  responseArray:any=[];
  userData:any={};
  displayedColumns: string[] = ['Project', 'Full Name', 'Contract', '#', 'Status'];
  dataSource = new MatTableDataSource<[]>([]);
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
  }
  constructor(private route: Router) {}
 
  ngOnInit(): void {
    //call API
    API.get("projects", "/projects" , {})
    .then(response => {
      this.responseArray=response
      this.responseArray.forEach(element => {
        if(element.name=="John"){
          this.userData=element
          sessionStorage.setItem("userData",JSON.stringify(this.userData));
          this.dataSource.data=this.userData.ListOfProjectDetails
        }
      });
      })
    .catch((error) => {
      console.log(error.response);
      });
  }

getProjectID(element) {
  //capture ID of project
  console.log(element);
  //navigate to status using ID
  this.route.navigateByUrl(`status/${element.projectID}`);
}


}export interface DashboardElement {
  project: string;
  fullname: string;
  contract: string;
  hash: string;
  status: string;
}

  // const ELEMENT_DATA: DashboardElement[] = [
  //   {project: 'NRM', fullname: 'Full Name of NRM', contract: 'Contract', hash: '#', status: 'In Progress'},
  //   {project: 'FLP', fullname: 'Full Name of FLP', contract: 'Contract', hash: '#', status: 'In Progress'},
  //   {project: 'FEMA', fullname: 'Full Name of FEMA', contract: 'Contract', hash: '#', status: 'In Progress'},
  //   {project: 'NMIS', fullname: 'Nursery Management Information System', contract: 'Contract', hash: '#', status: 'In Progress'},
  //   {project: 'DSO', fullname: 'DevSpecOps', contract: 'Contract', hash: '#', status: 'Delivered'},
  //   {project: 'EAD', fullname: 'Cloud Foundations', contract: 'Contract', hash: '#', status: 'On Hold'}
  // ]
 
  
//not used nw
function getProjects(){
  API.get("projects", "/projects" , {})
  .then(response => {
    })
  .catch((error) => {
    console.log(error.response);
    });

}

