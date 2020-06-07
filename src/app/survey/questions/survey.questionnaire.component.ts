import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from './question.base';
import { Observable } from 'rxjs';

@Component({
  selector: 'survey-questionnaire',
  templateUrl: './survey.questionnaire.component.html',
  providers:  [QuestionService]
})
export class SurveyQuestionnaireComponent implements OnInit {
  public title: string;
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.title = 'questions';
    this.questions$ = this.questionService.getQuestions();
  }
}
