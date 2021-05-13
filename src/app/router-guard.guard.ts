import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./login/auth.service";

@Injectable({
  providedIn: 'root'
})

export class RouterGuardGuard implements CanActivate {
  constructor(private auth:AuthService)
  {



  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve => {
      if (this.auth.idUser){
        this.auth.checkUser().subscribe((r:any)=>{
          this.auth.setData(r)

          resolve(true);

        },error=>{
          this.auth.logout();
          resolve(false);
        })
      }else{
        resolve(false);
      }
    }));
  }

}
