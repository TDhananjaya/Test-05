import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { AppService } from "./app.service";



@Injectable()


export class AdminAuthGaurd implements CanActivate {
    constructor(private appService: AppService, private router: Router) { }
    canActivate(): boolean {
        if(this.appService.loggedIn){
                return true;
        }
        else{
            this.router.navigate(["/login"]);
        }

    }
}