import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { TODO_PROVIDERS } from './di/todo.di';
import { TodoModule } from './modules/todo/todo.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    TodoModule
  ],
  providers: [
    ...TODO_PROVIDERS
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
