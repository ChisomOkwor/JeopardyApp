import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService{

constructor(private http: HttpClient){}
fetchData(): Observable<Object> {
        return this.http.get('http://jservice.io/api/category', {params: {'id': '1'}});
        
   }

fetchDiff(): Observable<Object>{
   var inputDif = document.getElementById("difficulty").value;   
      return this.http.get('http://jservice.io/api/clues', {params: {'value': inputDif.toString()}});
   }

fetchDate(): Observable<Object>{
   //var inputDif = document.getElementById("date").value;   
      return this.http.get('http://jservice.io/api/clues', {params: {'min_date':"1996-05-22" }});
   }

fetchRandom(): Observable<Object>{
   //var inputnum = document.getElementById("date").value;   
      return this.http.get('http://jservice.io/api/random', {params: {'count':"100" }});
   }
     
}