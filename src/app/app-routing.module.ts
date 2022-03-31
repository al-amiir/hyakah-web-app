import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'sales', component: SideBarComponent },
  // { path: 'expenses', component: SideBarComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
