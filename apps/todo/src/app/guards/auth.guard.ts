import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ICheckLoggedInUsecase } from '@udao/presentation-core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private checkLoggedInUsecase: ICheckLoggedInUsecase,
    private router: Router
  ) {}
  async canActivate(): Promise<boolean | UrlTree> {
    if (await this.checkLoggedInUsecase.execute()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
