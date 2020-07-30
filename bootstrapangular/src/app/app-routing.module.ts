import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
// import { HtmlComponent } from './html/html.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  // {
  //   path: 'html',
  //   component: HtmlComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
