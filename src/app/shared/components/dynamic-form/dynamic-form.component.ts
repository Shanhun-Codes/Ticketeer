import { Component, Input, OnInit } from '@angular/core';
import { FormConfig } from '../../models/forms/interfaces/formConfig.model';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  @Input({required: true}) config!: FormConfig

  ngOnInit(): void {
    console.log('Ticket Form config loaded:', this.config);
    this.config.fields.forEach(field => {
      console.log(`Preparing field: ${field.name}, Type: ${field.type}`);
    });
  }
 

}
