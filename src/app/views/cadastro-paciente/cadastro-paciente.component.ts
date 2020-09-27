
import { ContatoDeEmergencia } from './../../../models/contatoDeEmergencia.model';

import { PacienteService } from 'src/services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/models/paciente';
import { Alergia } from 'src/models/alergia.model';
import { Doenca } from 'src/models/doenca.model';
import { Medicamento } from 'src/models/medicamento.model';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  alergiasComponentMultiselect: Alergia [] = [];
  doencasComponentMultiselect: Doenca [] = [];
  medicamentosComponentMultiselect: Medicamento [] = [];
  
  contatosEmergenciaModal : ContatoDeEmergencia [] = [];


  paciente: Paciente = new Paciente();


/*
  paciente: Paciente ={

    cpf: "41894941004",
    nome: "ANGULAR 10",
    email: "ariel-edit@hotmail.com",
    senha: "123456",
    doadorDeOrgao: true,
    telefone: "991557455",
    peso: 68.0,
    altura: 1.78,
    nascimento: "1994-10-25",
    sexo: "MASCULINO",
    tipoSanguinio: 2,
    estadoMoradia: 2,
    observacao: "Nada a declarar",

    medicamentos: [{
      id: "1",
      nome: "dsad"
    }],
    doencas  : [{
      id : "1",
          nome : "dsad"
    }],
    alergias :[{
      id : "1",
          nome : "dsad"
    }],
    contatosDeEmergencias: [{

      nome: "Ana Maria Beatriz",
      paretesco : 2,
      numero: "(67) 9954-8992"
    }]

    }
  
*/
  constructor(private pacienteService : PacienteService) { }

  ngOnInit(): void {
  }

  createPaciente():void{

    alert(this.paciente.cpf)
    this.pacienteService.create(this.paciente).subscribe(() => {
     console.log("CLIENTE SALVO")
    })
  }

  multiselectAlergia(alergiasSelecionadas):void{

    this.paciente.alergias = alergiasSelecionadas;
 //   this.paciente.alergias.push(alergiasSelecionadas);

     //this.alergiasComponentMultiselect = [];
   //  this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }
  
  multiselectDoenca(doencasSelecionados): void{
   // this.doencasComponentMultiselect = [];
    this.paciente.doencas = doencasSelecionados;
   // this.paciente.doencas.push(doencasSelecionados);
    //this.doencasComponentMultiselect.push(doencasSelecionados);
  }

  multiselectMedicamento(medicamentosSelecionados): void{
    
    this.paciente.medicamentos = medicamentosSelecionados;

    
   // this.paciente.medicamentos.push(medicamentosSelecionados);
    //this.medicamentosComponentMultiselect = [];
   // this.medicamentosComponentMultiselect.push(medicamentosSelecionados);
  }

  modalContatosEmergencias(contatosEmergenciasCriados) : void {

    this.paciente.contatosDeEmergencias = contatosEmergenciasCriados;
   // this.paciente.contatosDeEmergencias.push(contatosEmergenciasCriados);

    
    
     // this.contatosEmergenciaModal = [];
     // this.contatosEmergenciaModal.push(contatosEmergenciasCriados);
  }
}
