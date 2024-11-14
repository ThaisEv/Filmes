import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private API = 'https://www.omdbapi.com/?apikey=67a3b0d5';
  private filmes: Filme[] = [];

  constructor(private http: HttpClient) {
     
   }

  buscarFilmePorTitulo(titulo: string): Observable<Filme> {
    return this.http.get<Filme>(`${this.API}&t=${titulo}`);
  }
}
