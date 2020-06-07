import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { SurveyQuestionnaireComponent } from './questions/survey.questionnaire.component';

const routes: Routes = [{
  path: '',
  children: [
    {
        path: 'survey',    
        component: SurveyComponent,
    },
    {
        path: 'survey/:type',
        component: SurveyQuestionnaireComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }