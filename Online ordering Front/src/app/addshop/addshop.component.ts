import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.scss']
})
export class AddshopComponent implements OnInit {

  constructor( private fb:FormBuilder,private service:AppService,private router:Router) { 
      console.log(service.getDecodedAccessToken(localStorage.getItem("token")).id);
  }


 
  ngOnInit() {
    console.log()
  }

  private addShop = this.fb.group({
    userId:[this.service.getDecodedAccessToken(localStorage.getItem("token")).id],
    shopName: ['',Validators.required],
    address: ['',Validators.required],
    description:['',Validators.required],
    telePhoneNumber:['',Validators.required],
    email:['',Validators.required],
  });


  add(){
    console.log(this.addShop.valid)
    if(this.addShop.valid){
      this.service.addShop(this.addShop.value).subscribe(data=>{
        console.log(data)
        this.navigate();
      },err=>{
        console.log(err);
      });
    }
  }


 navigate(){
  this.router.navigate(['/client']);
 }
}
