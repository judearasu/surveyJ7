import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../questions/question.base';

@Component({
  selector: 'dynamic-question',
  templateUrl: './dynamic-question.component.html',
})
export class DynamicQuestionComponent implements OnInit {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  constructor() {}

  ngOnInit() {}

  get isValid() {
    return this.form.controls[this.question.code].valid;
  }
}
