import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  categories;
  constructor(private appService: AppService){ }
  fetchData(){
    this.appService.fetchData().toPromise()
        .then((categories)=>
    {
      this.categories = categories;
      var inputCat = document.getElementById("searchCat");
      console.log(this.categories);
      for (const cat of this.categories){
        console.log(cat);
    }   
        })
  }

  diffResults
  fetchDiff(){
    this.appService.fetchDiff().toPromise()
        .then((diffResults)=>
    {
      this.diffResults= diffResults;
      var inputDif = document.getElementById("difficulty").value;   
      console.log(inputDif);
      for (const diff of this.diffResults){
        console.log(diff);
    }   
        })
  }

  dateResults
  fetchDate(){
    this.appService.fetchDate().toPromise()
        .then((dateResults)=>
    {
      this.dateResults = dateResults;
      var inputdate = document.getElementById("date");   
      console.log(inputdate);
      for (const d of this.dateResults){
        console.log(d);
    }   
        })
  }

  randomResults
  fetchRandom(){
    this.appService.fetchRandom().toPromise()
        .then((randomResults)=>
    {
      this.randomResults = randomResults;
      var inputnum = document.getElementById("date");   
      console.log(inputnum);
      for (const r of this.randomResults){
        console.log(r);
    }   
        })
  }
  
  

  title = 'JEOOOPARDY';
  showCat = true;
  showDiff = false;
  showDate = false;
  showRandom = false
  
  doStuff() {
    this.showCat = true;
    this.showDiff = false
    this.showDate = false;
    this.showRandom = false;
    
  }
  doStuff2() {
    this.showDiff = true;
    this.showCat = false;
    this.showDate = false;
    this.showRandom = false;
    
  
  }
 doStuff3(){
    this.showDate = true;
    this.showDiff = false;
    this.showCat = false;
    this.showRandom = false;
  
}
doStuff4(){
  this.showRandom = true;
  this.showDate = false;
  this.showDiff = false;
  this.showCat = false;

}


  
}


