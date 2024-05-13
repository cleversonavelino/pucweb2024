import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environment/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    UsuarioComponent,
    LayoutComponent,
    LoginComponent,
    ListaUsuarioComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    //imports para adicionar
    //import { AngularFireModule } from '@angular/fire/compat';
    AngularFireModule.initializeApp(environment.firebase),
    //import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
    AngularFireDatabaseModule,
    AngularFireStorageModule        
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
