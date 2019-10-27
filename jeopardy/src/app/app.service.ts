import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService{

constructor(private http: HttpClient){}
fetchAllCat(): Observable<Object>{ 
   return this.http.get('http://jservice.io/api/categories', {params: {'count': "100" }});
   }

fetchData(): Observable<Object> {
   //var inputDif = document.getElementById("date")['value']; 
      return this.http.get('http://jservice.io/api/category', {params: {'id': '3'}}); 
   }

fetchDiff(): Observable<Object>{
   var inputDif = document.getElementById("difficulty")['value'];   
      return this.http.get('http://jservice.io/api/clues', {params: {'value': inputDif.toString()}});
   }

fetchDate(): Observable<Object>{
   //var Dateinput = document.getElementById("date")['value'];   
      return this.http.get('http://jservice.io/api/clues', {params: {'min_date': "2007-05-21T12:00:00.000Z" }});
   }

fetchRandom(): Observable<Object>{ 
      return this.http.get('http://jservice.io/api/random', {params: {'count':"100" }});
   }
     
}