import { Component, signal} from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hld } from '../models/hld';
import { HldMiniFormComponent } from '../hld-mini-form/hld-mini-form.component';

@Component({
  selector: 'app-hlds-list',
  imports: [ReactiveFormsModule, HldMiniFormComponent],
  standalone: true,
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
  trackById(index: number, item: any) {
    return item.id;
  }

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.hldForm! = this.buildHldForm();
    this.miniForm! = this.buildMiniForm();
    // this.miniForm.valueChanges.subscribe(value => console.log('Mini form value changed:', value));
    // this.miniForm.valueChanges.subscribe(value => this.hlds = this.hlds.filter(hld => hld.name.includes(value.name)));
        this.miniForm.valueChanges.subscribe(value => this.hldList.set(this.hlds.filter(hld => hld.name.includes(value.name))));

  }

  hldList = signal<Hld[]>(this.hlds);


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
      someBooleanControl: false
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
