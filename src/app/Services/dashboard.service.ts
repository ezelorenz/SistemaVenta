import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urlApi: string = environment.endpont + "Dashboard";

  constructor(private http: HttpClient) { }
  
  resumen(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Resumen`)
  }
}
