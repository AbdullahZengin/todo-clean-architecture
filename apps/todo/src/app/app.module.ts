import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { TODO_PROVIDERS } from './di/todo.di';
// import { TodoModule } from './modules/todo/todo.module';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing';
import { AUTH_PROVIDERS } from './di/auth.di';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LoginComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    // TodoModule,
  ],
  providers: [...TODO_PROVIDERS, ...AUTH_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
