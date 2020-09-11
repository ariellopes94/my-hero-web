import { CartaoQrCode } from './../models/DTO/CartaoQrCode';
import { FichaPacienteDTO } from './../models/DTO/FichaPaciente.dto';
import { Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( public http: HttpClient ) { }

  fichaDoPaciente() : Observable<FichaPacienteDTO> {
    var numeroFichaPaciente : string = window.location.href;
    return this.http.get <FichaPacienteDTO>(`${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/XTR700`);
  }

  gerarQrCode() : Observable<CartaoQrCode> {

    return this.http.get<CartaoQrCode>(`${API_CONFIG.baseUrl}/pacientes/gerarCodigoQrCode/41894941004`);
  }
}
