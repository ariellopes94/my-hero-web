import { ContatoDeEmergencia } from 'src/models/contatoDeEmergencia.model';
import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";

export interface ConfirmModel {
    id: string;
    nome: string;
    paretesco: number;
    numero: string; 
    
}


@Component({
  selector: 'app-editar-contato-emergencia-modal',
  templateUrl: './editar-contato-emergencia-modal.component.html',
  styleUrls: ['./editar-contato-emergencia-modal.component.css']
})
export class EditarContatoEmergenciaModalComponent extends SimpleModalComponent<ConfirmModel, ContatoDeEmergencia> implements ConfirmModel {
 
 

 contatoDeEmergencia : ContatoDeEmergencia={
  id: "",
  nome: "",
  paretesco : 0,
  numero: ""
 }

 
 
  id: string;
    nome: string;
    paretesco: number;
    numero: string; 

  constructor() {
    super();
   }

  ngOnInit(): void {
  }
  
  confirm() {
    
    this.contatoDeEmergencia.id = this.id;
    this.contatoDeEmergencia.nome = this.nome;
    this.contatoDeEmergencia.paretesco = this.paretesco;
    this.contatoDeEmergencia.numero = this.numero;

    this.result =this.contatoDeEmergencia;
    this.close();
  }
  cancel() {
   //this.result = false;
    this.close();
  }
}
