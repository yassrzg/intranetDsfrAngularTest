import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AlerteComponent } from './components/alerte/alerte.component';
import {RouterModule} from "@angular/router";
import { ContainerComponent } from './components/container/container.component';
import { BodyComponent } from './components/body/body.component';
import {ROUTES} from "./app-routing.module";
import { ActusComponent } from './components/body/add-pages/actus/actus.component';
import { OutilsComponent } from './components/body/add-pages/outils/outils.component';
import { AddPagesComponent } from './components/body/add-pages/add-pages.component';
import { GeneraleComponent } from './components/body/add-pages/actus/generale/generale.component';
import { RhComponent } from './components/body/add-pages/actus/rh/rh.component';
import { OEComponent } from './components/body/add-pages/actus/oe/oe.component';
import { SfComponent } from './components/body/add-pages/actus/sf/sf.component';
import { ImportantComponent } from './components/body/add-pages/actus/important/important.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlerteComponent,
    ContainerComponent,
    BodyComponent,
    ActusComponent,
    OutilsComponent,
    AddPagesComponent,
    GeneraleComponent,
    RhComponent,
    OEComponent,
    SfComponent,
    ImportantComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
