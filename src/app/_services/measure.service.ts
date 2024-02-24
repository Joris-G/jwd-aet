import { Injectable, inject } from '@angular/core';
import { Measure } from '../_interface/measure.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {
  private apiUrl = "http://localhost:3000/api/measure/";
  private http = inject(HttpClient);
  getMeasures(processId: number): Observable<Measure[]> {
    return this.http.get<Measure[]>(this.apiUrl + `processId/${processId}`);
  }

  constructor() { }
}
