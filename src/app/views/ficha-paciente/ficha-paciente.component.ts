import { Component, OnInit } from '@angular/core';

import { PacienteService } from 'src/services/paciente.service';
import { FichaPacienteDTO } from '../../../models/DTO/fichaPaciente.dto';

import { Medicamento } from 'src/models/medicamento.model';
import { Doenca } from 'src/models/doenca.model';
import { Alergia } from 'src/models/alergia.model';
import { ContatoDeEmergencia } from 'src/models/contatoDeEmergencia.model';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.css']
})
export class FichaPacienteComponent implements OnInit {
 
  public fichaPaciente : FichaPacienteDTO;

  public medicamentos: Medicamento[];
  public doencas : Doenca[];
  public alergias : Alergia[];
  public contatoDeEmergencias : ContatoDeEmergencia[];
  
  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {

    this.pacienteService.fichaDoPaciente()
    .subscribe(reponse => {
      this.fichaPaciente = reponse;
     
     this.medicamentos = this.fichaPaciente.medicamentos;
     this.doencas = this.fichaPaciente.doencas;
     this.alergias = this.fichaPaciente.alergias;
     this.contatoDeEmergencias = this.fichaPaciente.contatosDeEmergencias;
      
 
      console.log(this.fichaPaciente)
      },
      error => {
        console.log(error);
      });

    }
  }
