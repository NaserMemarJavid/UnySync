import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LosgehtesComponent } from './components/losgehtes/losgehtes.component';
import { HeaderComponent } from './components/header/header.component';
import { MaintoolsComponent } from './components/maintools/maintools.component';
import { StudienverlaufsplanComponent } from './components/studienverlaufsplan/studienverlaufsplan.component';
import { StundenplanComponent } from './components/stundenplan/stundenplan.component';
import { PassvergessenComponent } from './components/passvergessen/passvergessen.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LosgehtesComponent,
    HeaderComponent,
    MaintoolsComponent,
    StudienverlaufsplanComponent,
    StundenplanComponent,
    PassvergessenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
