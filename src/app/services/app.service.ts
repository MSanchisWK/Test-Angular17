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

  private fetchData(endpoint: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/${endpoint}`).pipe(
      map(data => data.filter(item => item !== null)) 
    );
  }

  public getSongs(): Observable<Song[]> {
    return this.fetchData('songs') as Observable<Song[]>;
  }

  public getArtists(): Observable<Artist[]> {
    return this.fetchData('artists') as Observable<Artist[]>;
  }

  public getCompanies(): Observable<Company[]> {
    return this.fetchData('companies') as Observable<Company[]>;
  }
}

