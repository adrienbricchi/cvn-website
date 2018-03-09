import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CvnHeaderComponent } from './cvn-header/cvn-header.component';
import { FirstMovieComponent } from './first-movie/first-movie.component';
import { SecondMovieComponent } from './second-movie/second-movie.component';
import { CvnLocationComponent } from './cvn-location/cvn-location.component';
import { CvnIntroComponent } from './cvn-intro/cvn-intro.component';
import { FirstMovieContentComponent } from './first-movie-content/first-movie-content.component';
import { SecondMovieContentComponent } from './second-movie-content/second-movie-content.component';


@NgModule({
  declarations: [
    AppComponent,
    CvnHeaderComponent,
    FirstMovieComponent,
    SecondMovieComponent,
    CvnLocationComponent,
    CvnIntroComponent,
    FirstMovieContentComponent,
    SecondMovieContentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
