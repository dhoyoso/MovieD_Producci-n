import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module'
import { HomeComponent } from './components/home.component';
import { AppComponent } from './components/app.component';
import { UserService } from './services/user.service';
import {MovieService} from "./services/movie.service";
import {CustExtBrowserXhr} from "./cust-ext-browser-xhr";


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, MovieService,CustExtBrowserXhr],
  bootstrap: [AppComponent]

})
export class AppModule { }


