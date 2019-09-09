import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetComponent } from './timesheet.component';
import { NewtimesheetComponent } from './newtimesheet/newtimesheet.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { ApprovedComponent } from './approved/approved.component';
import { RejectedComponent } from './rejected/rejected.component';
import { HomeComponent } from '../core/home/home.component';


const routes: Routes = [
  {path:'timesheet',component:TimesheetComponent
},
{
  path:'timesheet/newtimesheet', component:NewtimesheetComponent
},
{
  path:'timesheet/pending-approval', component:PendingApprovalComponent},
{
  path:'timesheet/approved', component:ApprovedComponent},
{
  path:'timesheet/rejected', component:RejectedComponent},
  
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetRoutingModule { }
