import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  private fetchData(endpoint: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/${endpoint}`).pipe(
      map(data => data.filter(item => item !== null)) 
    );
  }

  public getSongs(): Observable<any[]> {
    return this.fetchData('songs');
  }

  public getArtists(): Observable<any[]> {
    return this.fetchData('artists');
  }

  public getCompanies(): Observable<any[]> {
    return this.fetchData('companies');
  }
}
