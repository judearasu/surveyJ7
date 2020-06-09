export class QuestionBase<T> {
    value: T;
    code: string;
    title: string;
    isRequired: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
    visibleIf: string;
    constructor(options: {
        value?: T,
        code?: string,
        title?: string,
        isRequired?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        visibleIf? : string
      } = {}) {
      this.value = options.value;
      this.code = options.code || '';
      this.title = options.title || '';
      this.isRequired = !!options.isRequired;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.visibleIf = options.visibleIf || '';
    }
  }
  
  