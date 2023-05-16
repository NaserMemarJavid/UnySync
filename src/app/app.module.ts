import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HauptseiteComponent } from './components/hauptseite/hauptseite.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { RouterModule, Routes } from '@angular/router';
import { PassvergessenComponent } from './components/passvergessen/passvergessen.component';


const appRoutes: Routes = [

  { path: '', component: HauptseiteComponent },
  { path: 'getstarted', component: GetstartedComponent },
  { path: 'passvergessen', component: PassvergessenComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HauptseiteComponent,
    GetstartedComponent,
    PassvergessenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
