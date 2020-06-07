import { NgModule } from '@angular/core';
import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { SurveyQuestionnaireComponent } from './questions/survey.questionnaire.component';
import { ComponentsModule } from '../survey/components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SurveyComponent,
    SurveyQuestionnaireComponent
  ],
  imports: [
    SurveyRoutingModule,
    ComponentsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class SurveyModule { }
