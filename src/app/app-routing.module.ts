import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
import { AppComponent } from './app.component';
import { GridEmpdataComponent } from './grid-empdata/grid-empdata.component';
const routes: Routes = [
{ path: "app", component: AppComponent},
{ path: "grid-empdata", component: GridEmpdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
>>>>>>> 314576b (Angular Uploaded-File)
})
export class AppRoutingModule { }
