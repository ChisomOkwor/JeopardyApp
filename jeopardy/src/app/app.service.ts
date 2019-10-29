import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { type } from 'os';

@Injectable()
export class AppService{
   map = new Map();
   Results;
   titles = new Array();
constructor(private http: HttpClient){
   this.fetchAllCat().toPromise()
         // .catch(err =>{

         // })
         .then((Results:any[])=>
        {
           this.Results = Results
          for(var i=0; i < Results.length;i++ ){
            var title = Results[i].title
            var id =  Results[i].id
            this.titles.push(title)
            this.map.set(title, id);
          }
    
         })  

}

// This gets all the 100 categories available in the API
fetchAllCat(): Observable<Object>{ 
   return this.http.get('http://jservice.io/api/categories', {params: {'count': "100" }});
   }

// API function for getting getting all clues in a given category
fetchCategories(): Observable<Object> {
   var category = document.getElementById("searchCat")['value'];   
  console.log(category.toString())
   console.log(this.map.get("a pair of dice, lost"))

      return this.http.get('http://jservice.io/api/category', {params: {'id': this.map.get(category.toString())}});
      
   }

// API function for getting clues by Value(difficulty)
fetchDiff(): Observable<Object>{
   var inputDif = document.getElementById("difficulty")['value'];   
      return this.http.get('http://jservice.io/api/clues', {params: {'value': inputDif.toString()}});
   }

// Funtion for chaning date format
formatDate(date){
   var result =  date +  "T12:00:00.000Z";
    return result
}

// API function for getting minimum date
fetchDate(): Observable<Object>{
   var inputDate = document.getElementById("date")['value'];    
      return this.http.get('http://jservice.io/api/clues', {params: {'min_date': this.formatDate(inputDate)}});
   }


// API function for getting random clues
fetchRandom(): Observable<Object>{ 
      return this.http.get('http://jservice.io/api/random', {params: {'count':"100" }});
   }
     
}