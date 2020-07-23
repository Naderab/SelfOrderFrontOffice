import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifierGroupsService {

  constructor(private http: HttpClient) { }
  
  
  getModifierGroup(id: any) {
    return this.http.get(`${environment.apiUrl}/modifier-group/${id}`);
  }
}
