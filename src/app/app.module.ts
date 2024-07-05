import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Botões */
import {MatButtonModule} from '@angular/material/button';

/*Toolbar */

import {MatToolbarModule} from "@angular/material/toolbar";

/*Header Footer */
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';

/*Jogos e Component */
import { JogosComponent } from './views/jogos/jogos.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './app/menu/menu.component'
import {MatMenu} from '.app/app/menu/MenuComponent'



@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    HeaderComponent,
    FooterComponent,
    JogosComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenu
    mat-toolbar-row
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
