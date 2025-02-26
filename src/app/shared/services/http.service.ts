import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/Interfaces/characters';
import { Details } from 'src/app/Interfaces/details';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://dragonball-api.com/api/characters?limit=100';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1, limit: number = 10) {
    return this.http.get(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
  }

  getCharacterById(id: number): Observable<Details>{
    const url= `https://dragonball-api.com/api/characters/${id}`;
    return this.http.get<Details>(url);
  }
}
