import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Establishment } from '../../models/establishment';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Establishment[]>(`${environment.apiUrl}/establishments`)
  }
}
