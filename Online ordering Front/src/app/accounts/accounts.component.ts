import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private service:AppService,private fb:FormBuilder) { }

  ngOnInit() {
  }

  private registerForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  });


  register(){
    console.log(this.registerForm.value);

    if(this.registerForm.valid){

      var formData = this.registerForm.value;
    this.service.register(formData).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
    }
    
  }


  private loginForm = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required,]
  });

  login(){
    var formData= this.loginForm.value
    if(this.loginForm.valid){
      this.service.login(formData).subscribe(data=>{
        console.log(data);
        localStorage.setItem("token",data.token);
      },err=>{
        console.log(err);
      });

    }
    
  }

}
