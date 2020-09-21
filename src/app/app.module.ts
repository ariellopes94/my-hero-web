import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaPacienteComponent } from './views/ficha-paciente/ficha-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { CartaoQrCodeComponent } from './views/cartao-qr-code/cartao-qr-code.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { LoginComponent } from './views/login/login.component';
import { PacienteComponent } from './views/paciente/paciente.component';
import { CadastroPacienteComponent } from './views/cadastro-paciente/cadastro-paciente.component'; // fonts provided for pdfmake

PdfMakeWrapper.setFonts(pdfFonts);;

@NgModule({
  declarations: [
    AppComponent,
    FichaPacienteComponent,
    CartaoQrCodeComponent,
    LoginComponent,
    PacienteComponent,
    CadastroPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
