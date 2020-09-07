import { Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { PacienteDTO } from '../models/DTO/Paciente.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( public http: HttpClient ) { }

  fichaDoPaciente() : Observable<PacienteDTO> {
    var numeroFichaPaciente : string = window.location.href;
    return this.http.get <PacienteDTO>(`${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/ATR30`);
  }
}
