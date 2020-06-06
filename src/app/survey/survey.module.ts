import { NgModule } from '@angular/core';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    SurveyRoutingModule
  ],
  providers: [],
  bootstrap: [SurveyComponent]
})
export class SurveyModule { }
