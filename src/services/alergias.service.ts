import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alergia } from 'src/models/alergia.model';

@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  constructor( public http: HttpClient ) { }

  alergiasBuscarTodos(): Observable<Alergia []> {
    return this.http.get<Alergia []>(`${API_CONFIG.baseUrl}/alergias`);
  }
}
