import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  map = new Map();
    Results;
    constructor(private appService: AppService){ 
    
      this.appService.fetchAllCat().toPromise()
         .then((Results)=>
         {
          for (let i = 0; i < 100; i++)  {
           this.Results = Results;
            var key = this.Results[i].title  
            var value =  this.Results[i].id 
            this.map.set(key, value); 
          }
                  
         })      
         console.log(this.map);
         console.log(this.map.size);
        
     console.log(this.map.has("narnia"));
   }

   
  newcatResults;
  catResults;

  fetchData(){
    this.appService.fetchData().toPromise()
        .then((catResults)=>
    {
      this.catResults = catResults;
      this.newcatResults = (this.catResults).clues.slice(0, 10);
        })
  }

  newdiffResults
  diffResults
  fetchDiff(){
    this.appService.fetchDiff().toPromise()
        .then((diffResults)=>
    {
      this.diffResults= diffResults;  
      this.newdiffResults = (this.diffResults).slice(0, 10);
        })
  }

  newdateResults;
  dateResults
  fetchDate(){
    this.appService.fetchDate().toPromise()
        .then((dateResults)=>
    {
      this.dateResults = dateResults; 
      this.newdateResults = (this.dateResults).slice(0, 10);
        })
  }

  newranResults;
  randomResults
  fetchRandom(){
    this.appService.fetchRandom().toPromise()
        .then((randomResults)=>
    {
      this.randomResults = randomResults;
      this.newranResults= (this.randomResults).slice(0, 10);
        })
  }

  PageEventran(event){
    this.newranResults = this.randomResults.slice(0, event.pageSize);
  }

  PageEventdate(event){
    this.newdateResults = this.dateResults.slice(0, event.pageSize);
      
    }

  PageEventdiff(event){
    this.newdiffResults = this.diffResults.slice(0, event.pageSize);
      
    }

  PageEventcat(event){
    this.newcatResults = this.catResults.clues.slice(0, event.pageSize);
      
    }
  
    
  title = 'JEOOOPARDY';
  showCat = true;
  showDiff = false;
  showDate = false;
  showRandom = false;


  
  openCat() {
    this.showCat = true;
    this.showDiff = false
    this.showDate = false;
    this.showRandom = false; 
  }

  openDiff() {
    this.showDiff = true;
    this.showCat = false;
    this.showDate = false;
    this.showRandom = false;
  
  }

 openDate(){
    this.showDate = true;
    this.showDiff = false;
    this.showCat = false;
    this.showRandom = false;  
}

  openRan(){
    this.showRandom = true;
    this.showDate = false;
    this.showDiff = false;
    this.showCat = false;
}

}