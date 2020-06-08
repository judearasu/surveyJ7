import { Injectable } from '@angular/core';
import { QuestionBase } from './question.base';
import { SurveyJson} from './../config/question';
import { TextboxQuestion }  from './question-textbox';
import { ChoiceQuestion } from './question-choice';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  getQuestions() {
    let questions: QuestionBase<string>[] = [];
        SurveyJson.survey.questions.forEach((question: any) => {
            if(question.type === 'text'){
                questions.push(new TextboxQuestion(question))
            }
            if(question.type === 'choice'){
              questions.push(new ChoiceQuestion(question))
          }
        });
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
