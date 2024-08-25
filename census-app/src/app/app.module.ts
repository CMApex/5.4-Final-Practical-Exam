import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CensusListComponent } from './census-list/census-list.component';
import { CensusFormComponent } from './census-form/census-form.component';

@NgModule({
    declarations: [
        AppComponent,
        CensusListComponent,
        CensusFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
