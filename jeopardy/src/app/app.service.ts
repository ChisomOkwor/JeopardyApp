import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { type } from 'os';

@Injectable()
export class AppService{

   map = new Map();    //Hash map
   Results;
   titles = new Array(); // Array 
constructor(private http: HttpClient){
// Creates a map of categories 
   this.fetchAllCat().toPromise()  
         .then((Results:any[])=>
        {
           this.Results = Results
          for(var i=0; i < Results.length;i++ ){
            var title = Results[i].title
            var id =  Results[i].id
// Creates an array of titles  only for category select list(see html)
            this.titles.push(title)
//Keys are the titles and values are ID's (in the Category API)
            this.map.set(title, id);
          }
    
         })  

}

// This gets all the 100 categories available in the API
fetchAllCat(): Observable<Object>{ 
   return this.http.get('https://cors-anywhere.herokuapp.com/http://jservice.io/api/categories', {params: {'count': "100" }});
   }

// API function for getting getting all clues in a given category
fetchCategories(): Observable<Object> {
   var category = document.getElementById("searchCat")['value'];   
      return this.http.get('https://cors-anywhere.herokuapp.com/http://jservice.io/api/category', {params: {'id': this.map.get(category.toString())}});
      
   }

// API function for getting clues by Value(difficulty)
fetchDiff(): Observable<Object>{
   var inputDif = document.getElementById("difficulty")['value'];   
      return this.http.get('https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues', {params: {'value': inputDif.toString()}});
   }

// Funtion for changing date format
formatDate(date){
   if (date.toString().length == 0){
      return ''
   }
   var year = '';
   var month = '';
   var day = '';
   date = date.toString()
   var counter = date.length - 1;
// Gets year from my date picker format
   while(date[counter] != '/'){
      year = date[counter] + year;
      counter = counter -1;
   }
   counter = counter - 1;
// Gets day from my date picker format
   while(date[counter] != '/'){
      day = date[counter] + day;
      counter = counter -1;
   }
   counter = counter - 1;
// Gets month from my date picker format
   while( counter >= 0){
      month = date[counter] + month;
      counter = counter - 1;
   }
   var newdate = year + '-'+ month+ '-'+ day;
   return newdate;
}

// API function for getting minimum date
fetchDate(): Observable<Object>{
   var inputDate = document.getElementById("date")['value'];    
   inputDate = this.formatDate(inputDate)
   if(inputDate.length  != 0){
      return this.http.get('https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues', {params: {'min_date': inputDate, 'max_date': inputDate}});
   }
}

// API function for getting random clues
fetchRandom(): Observable<Object>{ 
      return this.http.get('https://cors-anywhere.herokuapp.com/http://jservice.io/api/random', {params: {'count':"100" }});
   }
     
}