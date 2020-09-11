import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EstablishmentComponent } from '../components/establishment/establishment.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "establishment/:id", component: EstablishmentComponent },
  { path: "**", redirectTo: "dashboard"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
