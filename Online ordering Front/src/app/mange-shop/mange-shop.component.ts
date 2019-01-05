import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-mange-shop',
  templateUrl: './mange-shop.component.html',
  styleUrls: ['./mange-shop.component.scss']
})
export class MangeShopComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private service:AppService) { }

  ngOnInit() {

    this.getRouteParams();
  }

  private shopDetails;

  getRouteParams() {

    console.log(this.activeRoute.snapshot.params.id);
    if(this.activeRoute.snapshot.params.id!=""){
      this.service.getShop(this.activeRoute.snapshot.params.id).subscribe(data=>{

        console.log(data);
        this.shopDetails=data;
      },err=>{});
    }
  }

}
