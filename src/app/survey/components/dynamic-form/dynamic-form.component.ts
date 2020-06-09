import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../questions/question.base';
import { QuestionControlService } from '../../questions/question.control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  visibleQuestions: any = {};
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.visibleQuestions = this.qcs.setVisibility(this.questions);
    this.formValueChanges();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  formValueChanges() {
    // this.form.valueChanges.subscribe((codeVal: any) => {
    //   this.qcs.checkSetVisibility(this.questions, this.form);
    // });
  }
}
