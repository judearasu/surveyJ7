export const SurveyJson = {
  survey: {
    questions: [
      {
        code: 'firstName',
        title: 'First Name',
        isRequired: true,
        value: 'Thillai',
        type: 'text',
        order: 1,
        validators: [
          {
            type: 'pattern',
            regex: 'regex value',
            text: 'Validation Message',
          },
        ],
        meta: {},
        visibleIf: null,
      },
      {
        code: 'lastName',
        title: 'Last Name',
        isRequired: true,
        value: 'Narayanan',
        type: 'text',
        order: 2,
        validators: [
          {
            type: 'pattern',
            regex: 'regex value',
            text: 'Validation Message',
          },
        ],
        meta: {},
        visibleIf: null,
      },
      {
        code: 'status',
        title: 'Current Status',
        isRequired: true,
        value: [
          {
            label: 'YES',
            val: 'YES',
          },
          {
            label: 'NO',
            val: 'NO',
          },
        ],
        type: 'choice',
        order: 3,
        meta: {},
        visibleIf: null,
      },
      {
        code: 'dataCollector',
        title: 'Name of data collector',
        isRequired: true,
        value: null,
        type: 'text',
        order: 4,
        meta: {},
        visibleIf: "status === 'YES'",
      },
      {
        code: 'dataCollectorInst',
        title: 'Data collector Institution',
        isRequired: true,
        value: null,
        type: 'text',
        order: 5,
        meta: {},
        visibleIf: "status === 'YES'",
      }
    ],
  },
};
