import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaPacienteComponent } from './ficha-paciente/ficha-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { CartaoQrCodeComponent } from './cartao-qr-code/cartao-qr-code.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

PdfMakeWrapper.setFonts(pdfFonts);;

@NgModule({
  declarations: [
    AppComponent,
    FichaPacienteComponent,
    CartaoQrCodeComponent
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
