import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    return this.authService.watchUser.pipe(
      map((user) => {
        console.log(user.role)
        if (user.role === 'Admin') return true;
        this.router.navigate(['/admin/login']);
        return false;
      })
    )
  }
}
