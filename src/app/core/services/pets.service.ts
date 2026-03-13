import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private api = 'https://my-json-server.typicode.com/Feverup/fever_pets_data/pets';

  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.api);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.api}/${id}`);
  }
}