import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorService } from '../services/post.service';
import { Doctors } from '../models/doctors.model';




@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent  {

  doctorForm: FormGroup;
  

  constructor(private fb: FormBuilder,private doctorService: DoctorService) { 
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialisation: ['', Validators.required],
      availability: [false, Validators.required],
      location: ['', Validators.required]
    });
    
  }


  onSubmit(value: Doctors) {
    //  console.log(this.doctorForm.value);
     value.ID = value.name;
     this.doctorService.create(value).subscribe((response: any) => {
      alert("Thank you for registering")
    });
  }

}
