import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class MaterialModule {}
