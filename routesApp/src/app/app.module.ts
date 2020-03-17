import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

// ROUTES
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsuarioNuevoComponent } from './componentes/usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle/usuario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
