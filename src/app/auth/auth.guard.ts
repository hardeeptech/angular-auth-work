import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserdataService } from '../shared/userdata.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userdata: UserdataService, 
        private router: Router) { }

    canActivate(): boolean {
        if (this.userdata.getData() != null) {
            return true
        } else {
            this.router.navigateByUrl('/user/login')
            return false
        }
    }

}