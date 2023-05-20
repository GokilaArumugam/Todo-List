import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators, RequiredValidator,FormBuilder } from '@angular/forms';
import { RegisterModel } from 'src/app/Models/registerModel';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private service: AuthService)
  {}
 
 registerForm: FormGroup;
registerModel=new  RegisterModel();
 ngOnInit(){
  this.registerForm=this.formBuilder.group({
    name:['',[Validators.required,
        Validators.minLength(2)]],
    age:['',
      [Validators.required,
      ]],
    email:['',[Validators.required,Validators.email
    ]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
  });
    
 }

 Onsubmit()
 {
   this.registerModel.name=this.registrationFormControls['name'].value;
   this.registerModel.age= this.registrationFormControls['age'].value;
   this.registerModel.email=this.registrationFormControls['email'].value;
   this.registerModel.password=this.registrationFormControls['password'].value;
   this.service.Register(this.registerModel).subscribe(
      (res) => {},
      (err) => {}
    );
 }

get registrationFormControls(){
  return this.registerForm.controls;
}

}