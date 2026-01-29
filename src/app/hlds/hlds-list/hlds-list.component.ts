import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hld } from '../models/hld';

@Component({
  selector: 'cs-hlds-list',
  imports: [],
  templateUrl: './hlds-list.component.html',
  styleUrl: './hlds-list.component.less'
})
export class HldsListComponent implements OnInit {

  hldForm!: FormGroup;
  miniForm!: FormGroup;

  hlds: Hld[] = [
    { id: 1, name: 'ABC', description: 'ABC description', link: 'http://abc.com' },
    { id: 2, name: 'PCV', description: 'PCV description', link: 'http://pcv.com' },
    { id: 3, name: 'MUFIN', description: 'MUFIN description', link: 'http://mufin.com' },
    { id: 4, name: 'FICTION', description: 'FICTION description', link: 'http://fiction.com'}
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  

  ngOnInit(): void {
    this.hldForm = this.buildHldForm();
    this.miniForm = this.buildMiniForm();
  }

  buildHldForm(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      link: ''
    });
  }
    buildMiniForm(): FormGroup {
    return this.formBuilder.group({
      name:'',
      sobBooleanControl: false
    })
    }
  onAddHld(): void {
    const newHld: Hld = {
      id: this.hlds.length + 1,
      name: this.hldForm.value.name,
      description: this.hldForm.value.description,
      link: this.hldForm.value.link
    };
    this.hlds.push(newHld);
    this.hldForm.reset();
  }
}  
