import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-empdata',
  templateUrl: './grid-empdata.component.html',
  styleUrls: ['./grid-empdata.component.css']
})
export class GridEmpdataComponent {
private gridApi:any;
private gridColumnApi:any;
private columnDefs;
private sortingOrder:any;

constructor(){
  this.columnDefs=[
{
  headerName: "Name",
  field: "firstName",
  width: 100,
  sortingOrder:["asc","desc"]
},
{
  headerName: "Age",
  field: "age",
  width: 50,
}
 ];
}
onGridReady(params:any){
this.gridApi=params.api;
this.gridColumnApi=params.columnApi;
let dataValue=[{"firstName":"sravani", "age":20}]
params.api.setRowData(dataValue);
}
}
