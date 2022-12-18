import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { RouterModule,Routes } from '@angular/router';
>>>>>>> 314576b (Angular Uploaded-File)
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ExampleComponent } from './example/example.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
=======
import { UploadFileComponent } from './upload-file/upload-file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GridEmpdataComponent } from './grid-empdata/grid-empdata.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

>>>>>>> 314576b (Angular Uploaded-File)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ExampleComponent,
    UploadFileComponent
=======
    UploadFileComponent,
    NavBarComponent,
    EmployeeDetailsComponent,
    GridEmpdataComponent
>>>>>>> 314576b (Angular Uploaded-File)
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [UploadFileComponent]
})
export class AppModule { }
=======
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [UploadFileComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class AppModule { }
>>>>>>> 314576b (Angular Uploaded-File)
