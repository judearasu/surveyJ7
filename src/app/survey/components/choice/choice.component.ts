import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChoiceQuestion } from '../../questions/question-choice';

@Component({
    selector: 'choice',
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.scss']
})

export class ChoiceComponent implements OnInit{

    title: string;
    @Input() form: FormGroup;
    @Input() question: ChoiceQuestion;
    constructor(){

    }

    ngOnInit(){

    }
}