import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './timesheet.component';
import { NewtimesheetComponent } from './newtimesheet/newtimesheet.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { ApprovedComponent } from './approved/approved.component';
import { RejectedComponent } from './rejected/rejected.component';


@NgModule({
  declarations: [TimesheetComponent, NewtimesheetComponent, PendingApprovalComponent, ApprovedComponent, RejectedComponent],
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimesheetModule { }
