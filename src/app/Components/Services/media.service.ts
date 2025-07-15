import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private apiUrl = 'http://localhost:3000/api/media';

  constructor(private http: HttpClient) {}

  uploadMedia(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl + '/upload', formData);
  }

  getAllMedia(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteMedia(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
