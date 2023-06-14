import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './components/homepage/homepage.component';
import { LosgehtesComponent } from './components/losgehtes/losgehtes.component';
import { MaintoolsComponent } from './components/maintools/maintools.component';
import { StudienverlaufsplanComponent } from './components/studienverlaufsplan/studienverlaufsplan.component';
import { StundenplanComponent } from './components/stundenplan/stundenplan.component';
import { PassvergessenComponent } from './components/passvergessen/passvergessen.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { StudienverlaufsplanemptyComponent } from './components/studienverlaufsplanempty/studienverlaufsplanempty.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'losgehtes', component: LosgehtesComponent },
  { path: 'maintools', component: MaintoolsComponent },
  { path: 'studienverlaufsplan', component: StudienverlaufsplanComponent },
  { path: 'passvergessen', component: PassvergessenComponent },
  { path: 'stundenplan', component: StundenplanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'studienverlaufsplanempty', component: StudienverlaufsplanemptyComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
