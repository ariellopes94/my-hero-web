
import { PacienteService } from 'src/services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/models/paciente';
import { Alergia } from 'src/models/alergia.model';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  alergiasComponentMultiselect: Alergia [] = [];
  doencasComponentMultiselect: Alergia [] = [];
  medicamentosComponentMultiselect: Alergia [] = [];

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
  

  constructor(private pacienteService : PacienteService) { }

  ngOnInit(): void {
  }

  createPaciente():void{
    this.pacienteService.create(this.paciente).subscribe(() => {
     console.log("CLIENTE SALVO")
    })
  }

  multiselectAlergia(alergiasSelecionadas):void{
    this.alergiasComponentMultiselect = [];
    this.alergiasComponentMultiselect.push(alergiasSelecionadas);
  }
  
  multiselectDoenca(doencasSelecionados): void{
    this.doencasComponentMultiselect = [];
    this.doencasComponentMultiselect.push(doencasSelecionados);
  }

  multiselectMedicamento(medicamentosSelecionados): void{
    this.medicamentosComponentMultiselect = [];
    this.medicamentosComponentMultiselect.push(medicamentosSelecionados);
  }
}
