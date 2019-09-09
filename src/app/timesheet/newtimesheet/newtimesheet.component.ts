import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-newtimesheet',
  templateUrl: './newtimesheet.component.html',
  styleUrls: ['./newtimesheet.component.css']
})
export class NewtimesheetComponent implements OnInit {
  

 newTimeSheetForm: FormGroup;
  
  
  constructor(private _fb: FormBuilder) {

   }

  ngOnInit() {
    
    this.newTimeSheetForm = this._fb.group({

        employeeName:[null,Validators.required],
        employeeId:[null,Validators.required],
        project:[null,Validators.required],
        role: [null,Validators.required],        
        totalWorkingHoursPerMonth:[null,Validators.required]
        
      });

      
  }

  submitHandler(){
      console.log(this.newTimeSheetForm);

    
  }
}
