import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { FichaPacienteComponent } from './views/ficha-paciente/ficha-paciente.component'; 
import { CadastroPacienteComponent } from './views/cadastro-paciente/cadastro-paciente.component';
import { PacienteComponent } from './views/paciente/paciente.component';

const routes: Routes = [
   
  {
    path: "" ,
    component: LoginComponent
  },
  {
    path: "ficha-paciente/:codigoPaciente" ,
    component: FichaPacienteComponent
  },
  {
    path:"cadastro-paciente" ,
    component: CadastroPacienteComponent
  },
  {
    path:"paciente",
    component:PacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
