import { Injectable } from '@angular/core';
import { Flower } from '../shared/flower';
import { Observable , of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getFlowers(): Observable<Flower[]> {
    return this.http.get<Flower[]>(baseURL + 'flowers').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFlower(id: number): Observable<Flower> {
    return this.http.get<Flower>(baseURL + 'flowers/' + id).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedFlower(): Observable<Flower> {
    return this.http.get<Flower[]>(baseURL + 'flowers?featured=true').pipe(map(flowers => flowers[0])).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFlowerIds(): Observable<number[] | any> {
    return this.getFlowers().pipe(map(flowers => flowers.map(flower => flower.id))).pipe(catchError(error => error));
  }

  putFlower(flower: Flower): Observable<Flower> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Flower>(baseURL + 'flowers/' + flower.id, flower, httpOptions).pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
}
