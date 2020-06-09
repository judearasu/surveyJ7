import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './question.base';

@Injectable()
export class QuestionControlService {
  visibleQuestions = {};
  questions: QuestionBase<string>[] = [];

  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    let group: any = {};
    this.questions = questions;
    questions.forEach((question) => {
      group[question.code] = question.isRequired
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
      if (this.validateVisibleIf(question)) {
        group[question.code].enable();
      } else {
        group[question.code].disable();
      }
    });
    return new FormGroup(group);
  }

  setVisibility(questions: QuestionBase<string>[]) {
    for (var x = 0; x < questions.length; x++) {
      this.visibleQuestions[questions[x].code] = {
        code: questions[x].code,
        visibleIf: questions[x].visibleIf,
        visible: this.validateVisibleIf(questions[x]),
      };
    }
    return this.visibleQuestions;
  }

  validateVisibleIf(question: QuestionBase<string>) {
    let result = false;
    if (question.visibleIf === null || question.visibleIf === '') {
      result = true;
    } else if (question.visibleIf) {
      result = false;
    }
    return result;
  }

  checkSetVisibility(form: FormGroup) {
    this.questions.forEach((question) => {
      if (question.visibleIf) {
        for (let [key, value] of Object.entries(form.value)) {
          if (question.visibleIf.includes(key)) {
            let expr = question.visibleIf.replace(
              `${key}`,
              "'" + `${value}` + "'"
            );
            this.updateFormGroup(question, eval(expr), form);
          }
        }
      }
    });
  }

  updateFormGroup(
    question: QuestionBase<string>,
    expr: boolean,
    form: FormGroup
  ) {
    if (expr) {
      form.get(question.code).enable();
      this.visibleQuestions[question.code].visible = true;
    } else if (!expr) {
      form.get(question.code).disable();
      form.get(question.code).reset();
      this.visibleQuestions[question.code].visible = false;
    }
  }
}

export interface QuestionGrp {
  code?: string;
  visible?: boolean;
  visibleIf?: string;
}
