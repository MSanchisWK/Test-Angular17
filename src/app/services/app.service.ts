import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../enviroments/enviroment';
import { Artist } from '../interfaces/Artist'
import { Song } from '../interfaces/Song'
import { Company } from '../interfaces/Company'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/songs`).pipe(
      map(data => data.filter(item => item !== null)) 
    );
  }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.baseUrl}/artists`).pipe(
      map(data => data.filter(item => item !== null)) 
    );
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies`).pipe(
      map(data => data.filter(item => item !== null)) 
    );
  }

}

