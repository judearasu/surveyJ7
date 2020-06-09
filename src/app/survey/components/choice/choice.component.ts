import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChoiceQuestion } from '../../questions/question-choice';
import { QuestionControlService } from '../../questions/question.control.service';

@Component({
  selector: 'choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  title: string;
  @Input() form: FormGroup;
  @Input() question: ChoiceQuestion;
  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {}

  triggerEvent() {
    setTimeout(()=>{
      this.qcs.checkSetVisibility(this.form);
    })
    // this.form.get('dataCollector').enable();
  }
}
