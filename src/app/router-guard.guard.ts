import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './login/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RouterGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    return new Promise((resolve) => {
      if (this.auth.token) {
        resolve(true);
      } else {
        const tokenInStorage = localStorage.getItem('token');
        if (tokenInStorage) {
          this.auth.checkUser(tokenInStorage).subscribe((r: any) => {
            this.auth.setToken(tokenInStorage);
            this.auth.setData(r);
            resolve(true);
          }, error => {
            this.auth.logout();
            this.router.navigate(['login']);
            resolve(false);
          });

          // this.router.navigate(['hotels']);
        } else {
          this.router.navigate(['login']);
          resolve(false);
        }
      }
    });
  }
}
