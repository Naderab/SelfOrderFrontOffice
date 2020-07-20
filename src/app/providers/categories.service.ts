import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/category/all`);

  }
  getCategorie(id: any) {
    return this.http.get(`${environment.apiUrl}/category/${id}`);
  }
  

}
