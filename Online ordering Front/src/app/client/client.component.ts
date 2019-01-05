import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private service:AppService,private router:Router) { }

  private shops;
  ngOnInit() {

    console.log(this.service.getDecodedAccessToken(localStorage.getItem("token")));
    this.getShops();
  }


  getShops(){

    if(this.service.getDecodedAccessToken(localStorage.getItem("token")).id!=""){
        this.service.getShops({userId:this.service.getDecodedAccessToken(localStorage.getItem("token")).id}).subscribe(data=>{
          this.shops=data.shops;  
          console.log(data);
        },err=>{

        });
    }
  }

  goToManageShops(id){
    this.router.navigate(['/manageshop/'+id]);
  }

}
