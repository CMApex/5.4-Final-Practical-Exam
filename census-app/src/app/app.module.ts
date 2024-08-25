import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CensusListComponent } from './census-list/census-list.component';
import { CensusFormComponent } from './census-form/census-form.component';
import { CensusUpdateComponent } from './census-update/census-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CensusListComponent,
    CensusFormComponent,
    CensusUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
