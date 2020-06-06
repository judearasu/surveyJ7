import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
  })

export class SurveyComponent  implements OnInit{
    public title = "Welcome to JunkCast Survey Appplication";

    constructor(){

    }

    ngOnInit(){
      console.log('survey app');
    }
}