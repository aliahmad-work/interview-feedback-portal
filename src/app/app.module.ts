import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginComponent, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()]
})
export class AppModule {}
