// src/app/services/gig.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Gig {
  _id?: string;
  title: string;
  description: string;
  category?: string;
  skills?: string[];
  pay: string;
  location?: string;
  duration?: string;
  urgent?: boolean;
  remote?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GigService {
  private apiUrl = 'http://localhost:5000/api/gigs';

  constructor(private http: HttpClient) {}

  createGig(gig: Gig): Observable<Gig> {
    return this.http.post<Gig>(this.apiUrl, gig);
  }

  getGigs(): Observable<Gig[]> {
    return this.http.get<Gig[]>(this.apiUrl);
  }

  updateGig(id: string, gig: Partial<Gig>): Observable<Gig> {
    return this.http.put<Gig>(`${this.apiUrl}/${id}`, gig);
  }

  deleteGig(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
