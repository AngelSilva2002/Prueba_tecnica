import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plato} from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  URL_API = "http://localhost:3000/api/platos";

  platos: Plato[] = [];

  selectplato: Plato ={
    Nombre: '',
    Precio: 0, 
    Color: '',
    Inicio_Actividad: new Date()
  };

  constructor( private http: HttpClient) { }

  gellallplatos(){

    return this.http.get<Plato[]>(this.URL_API);
  }

  createplato(plato: Plato){
    return this.http.post(this.URL_API, plato);
  }

  putuser(plato: Plato){
    return this.http.put(this.URL_API + `/${plato._id}`, plato);
  }
}
