import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
=======
  selector: 'app-upload-file',  
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'] 
>>>>>>> 314576b (Angular Uploaded-File)
})
export class UploadFileComponent {

  fileUploadUrl='http://localhost:8080/api/v1/employee/upload';
 constructor(private _http:HttpClient) {}
   

  
file:any
<<<<<<< HEAD
flag=true;
=======
flag=true;    
>>>>>>> 314576b (Angular Uploaded-File)
  chooseFile(event:any){
   // console.log(event);

    this.file=event.target.files[0];
    console.log(this.file);
  }


  UploadFile(){
    let formData=new FormData();
    formData.append("file",this.file);

    this.flag=false;
    this._http.post(this.fileUploadUrl,formData).subscribe(
      (data:any)=>{
        console.log(data);
        alert(data.message);
        this.flag=true;
      },
      (error:any)=>{
        console.log(error);
        alert('Please upload the file');
<<<<<<< HEAD
=======
        this.flag=true;
>>>>>>> 314576b (Angular Uploaded-File)
      }
    );
     
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 314576b (Angular Uploaded-File)
