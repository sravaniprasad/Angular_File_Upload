import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  EmpList:any;
  constructor(private httpClient: HttpClient){
    this.EmpList=[];
  }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.httpClient.get('http://localhost:8080/api/v1/employee').subscribe((result:any)=>
    
    {
this.EmpList=result;
    })
  }
  // <th>S.No</th>
  // <th>EmployeeName</th>
  // <th>EmployeeAddress</th>
  // <th>EmployeeRole </th>
  // columnDefs = [
  //   {headerName: 'S.No', field:'S.No'},
  //   {headerName: 'EmployeeName', field:'EmployeeName'},
  //   {headerName: 'EmployeeAddress', field:'EmployeeAddress'},
  //   {headerName: 'EmployeeRole', field:'EmployeeRole'},
  //   ]
}
