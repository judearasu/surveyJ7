import { QuestionBase } from './question.base';

export class ChoiceQuestion extends QuestionBase<string> {
  controlType = 'choice';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
