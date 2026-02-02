import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hld-mini-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
    templateUrl: './hld-mini-form.component.html',
  styleUrl: './hld-mini-form.component.less'
})
export class HldMiniFormComponent {

@Input({required: true})

// form jest nazwą 
formik!: FormGroup;

field_data = {
  name: ''  
}
}
