import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DynamicFormComponent, DynamicQuestionComponent],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [],
  exports: [DynamicFormComponent, DynamicQuestionComponent],
})
export class ComponentsModule {}
