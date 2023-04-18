import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  url: string = environment.ToDoDataURL;

  constructor(private httpClient: HttpClient) {

  }

  GetList(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  GetListById(id: number): Observable<any> {
    return this.httpClient.get(this.url + "/" + id);
  }

}
