import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NodejsService {

  constructor(private http: HttpClient) {}

  getCliente(): Observable <any[]>{
    const url = 'http://localhost:3000/cliente';
    return  this.http.get<any[]>(url);

  }
}
