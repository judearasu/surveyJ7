import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { ChoiceComponent } from './choice/choice.component';
import { QuestionControlService } from '../questions/question.control.service';

@NgModule({
  declarations: [DynamicFormComponent, DynamicQuestionComponent, ChoiceComponent],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [QuestionControlService],
  bootstrap: [],
  exports: [DynamicFormComponent, DynamicQuestionComponent, ChoiceComponent],
})
export class ComponentsModule {}
