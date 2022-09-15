import { Component } from '@angular/core';
import { ICheckLoggedInUsecase, ILoginUsecase } from '@udao/presentation-core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loggedInUsecase: ICheckLoggedInUsecase,
    private router: Router,
    private loginUsecase: ILoginUsecase
  ) {
    loggedInUsecase.execute().then((result: boolean) => {
      if (result) {
        router.navigate(['/']);
      }
    });
  }

  login(username: string, password: string) {
    this.loginUsecase
      .execute({ username, password })
      .then((user) => {
        if (user) {
          alert('Giriş başarılı gardaş...');
          this.router.navigate(['/']);
        }
      })
      .catch((e: unknown) => {
        if (e instanceof HttpErrorResponse) {
          alert(e.error.message);
        }
        throw e;
      });
  }
}
