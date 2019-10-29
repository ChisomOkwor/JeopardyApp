import { Component } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   
     constructor(private appService: AppService){ 
           
         this.titles = appService.titles;
   }
   titles

   //API call using 'promise' to get clues by Category ID
   //Triggers API call from app.service.ts file
   //Gets the Json File with data, and sends to HTML(ON CALL)
  newcatResults;
  catResults;
  fetchCategories(){
    this.appService.fetchCategories().toPromise()
        .then((catResults)=>
    {
      this.catResults = catResults;
      this.newcatResults = (this.catResults).clues.slice(0, 10);
        })
  }
   //API call using 'promise' to get clues by difficulty level
   //Triggers API call from app.service.ts file
   //Gets the Json File with data, and sends to HTML(ON CALL)
  
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
  

   //API call using 'promise' to get Clues by min_date
   //Triggers API call from app.service.ts file
   //Gets the Json File with data, and sends to HTML(ON CALL)

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

   //API call using 'promise' to get Random Clues
   //Triggers API call from app.service.ts file
   //Gets the Json File with data, and sends to HTML(ON CALL)

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


 // These Functions returns "items per page" gotten from paginator
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


  // Triggers the Categories button. 
  openCat() {
    this.showCat = true;
    this.showDiff = false
    this.showDate = false;
    this.showRandom = false; 
  }

// Triggers the "Difficulty Level" button.
  openDiff() {
    this.showDiff = true;
    this.showCat = false;
    this.showDate = false;
    this.showRandom = false;
  
  }
// Triggers the "DATE AIRED" button.
 openDate(){
    this.showDate = true;
    this.showDiff = false;
    this.showCat = false;
    this.showRandom = false;  
}


// Triggers the "RANDOM" button.
  openRan(){
    this.showRandom = true;
    this.showDate = false;
    this.showDiff = false;
    this.showCat = false;
}

}