import { Paciente } from './../models/paciente';
import { CartaoQrCode } from '../models/DTO/cartaoQrCode.dto';
import { FichaPacienteDTO } from '../models/DTO/fichaPaciente.dto';
import { Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( public http: HttpClient ) { }

  create(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(`${API_CONFIG.baseUrl}/pacientes`, paciente);
  }

  fichaDoPaciente(): Observable<FichaPacienteDTO> {
    var numeroFichaPaciente : string = window.location.href;

    alert("TESTE" + numeroFichaPaciente);
    return this.http.get <FichaPacienteDTO>(`${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/XTR700`);
  }

  gerarQrCode(): Observable<CartaoQrCode> {

    return this.http.get<CartaoQrCode>(`${API_CONFIG.baseUrl}/pacientes/gerarCodigoQrCode/41894941004`);
  }
}
