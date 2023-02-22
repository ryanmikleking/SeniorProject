import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { API } from 'aws-amplify';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  responseArray:any=[];
  userData:any={};

  constructor(private route: ActivatedRoute) { }
  projectInfo:any;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('projectID');
    console.log(id)
    let userData = JSON.parse(sessionStorage.getItem("userData"));
    userData.ListOfProjectDetails.forEach(element => {
      if(element.projectID==id){
        this.projectInfo=element
      }
    });

  }
}
