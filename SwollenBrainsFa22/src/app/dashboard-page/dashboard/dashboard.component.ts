import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
constructor(private route: ActivatedRoute){}
  getProjectID(element) {
    //capture ID of project
    console.log(element);
    //navigate to status using ID
    // this.route.navigateByUrl('status/${projectID-value}');
  }
  projectInfo:any;
  
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('projectID');
    console.log(id)
    let userData = JSON.parse(sessionStorage.getItem("userData"));
    userData.forEach(element => {
        this.projectInfo=element
    });
}
}
