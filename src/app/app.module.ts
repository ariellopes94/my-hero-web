import { MultiselectDropdownComponent } from './multiselect/multiselect-Alergia/multiselect-dropdown.component';

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
import { CadastroPacienteComponent } from './views/cadastro-paciente/cadastro-paciente.component';
// fonts provided for pdfmake
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MultiselectDoencaComponent } from './multiselect/multiselect-doenca/multiselect-doenca.component';
import { MultiselectMedicamentoComponent } from './multiselect/multiselect-medicamento/multiselect-medicamento.component';
import { TelefoneDeContatosComponent } from './telefone-de-contatos/telefone-de-contatos.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { EditarContatoEmergenciaModalComponent } from './editar-contato-emergencia-modal/editar-contato-emergencia-modal.component';

PdfMakeWrapper.setFonts(pdfFonts);;

@NgModule({
  declarations: [
    AppComponent,
    FichaPacienteComponent,
    CartaoQrCodeComponent,
    LoginComponent,
    PacienteComponent,
    CadastroPacienteComponent,
    MultiselectDropdownComponent,
    MultiselectDoencaComponent,
    MultiselectMedicamentoComponent,
    TelefoneDeContatosComponent,
    ConfirmModalComponent,
    EditarContatoEmergenciaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMultiSelectModule,
    FormsModule,
    SimpleModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
