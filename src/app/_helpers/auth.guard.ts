import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const user = this.accountService.userValue;
    // if (user) {
    //     // authorised so return true
    //     return true;
    // }
    // not logged in so redirect to login page with the return url
    //this.router.navigate(['login'], { });
    if (localStorage.getItem('LoginFlag') === 'true') {
      return true;
    }
    else {
      this.router.navigate(['login'], {});
      return false;
    }

  }
  constructor(
    private router: Router
    // ,
    // private accountService: AccountService
  ) { }
}
