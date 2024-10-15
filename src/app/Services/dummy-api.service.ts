import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http: HttpClient) { }

  getQuote(): Observable<any>{
    return this.http.get('https://dummyjson.com/quotes/1');

  }

}
