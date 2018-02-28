import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CvnHeaderComponent } from './cvn-header/cvn-header.component';
import { FirstMovieComponent } from './first-movie/first-movie.component';
import { SecondMovieComponent } from './second-movie/second-movie.component';
import { CvnLocationComponent } from './cvn-location/cvn-location.component';


@NgModule({
  declarations: [
    AppComponent,
    CvnHeaderComponent,
    FirstMovieComponent,
    SecondMovieComponent,
    CvnLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
