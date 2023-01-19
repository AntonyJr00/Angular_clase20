import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private apiUri: string = 'https://jsonplaceholder.typicode.com/users';
  user: any[] = [];
  constructor(private http: HttpClient) {}
  getApi() {
    this.http.get(this.apiUri).subscribe((res: any) => {
      this.user = res;
    });
  }
}
