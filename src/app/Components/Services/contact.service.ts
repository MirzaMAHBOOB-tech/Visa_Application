import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contacts';

  constructor(private http: HttpClient) {}

  addContact(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  markAsRead(id: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/mark-read/${id}`, {});
}

  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
