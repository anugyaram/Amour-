import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';



@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) {
 }

 getData() {
   return this.http.get(baseURL);
 }
}