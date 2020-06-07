export const SurveyJson = {
    survey:{
        questions:[{
            'code': 'firstName',
            'title': 'First Name',
            'isRequired': true,
            'value': 'Thillai',
            'type': 'text',
            'order': 1,
            'validators':[
                {
                    'type' : 'pattern',
                    'regex' : 'regex value',
                    'text' : 'Validation Message'
                }
            ],
            'meta':{

            }
        },{
            'code': 'lastName',
            'title': 'Last Name',
            'isRequired': true,
            'value': 'Narayanan',
            'type': 'text',
            'order': 2,
            'validators':[
                {
                    'type' : 'pattern',
                    'regex' : 'regex value',
                    'text' : 'Validation Message'
                }
            ],
            'meta':{
                
            }
        }]
    }
}