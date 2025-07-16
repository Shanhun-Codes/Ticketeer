import { Component, inject, Input, OnInit } from '@angular/core';
import { FormConfig } from '../../models/forms/interfaces/formConfig.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  fb = inject(FormBuilder);

  @Input({ required: true }) config!: FormConfig;
  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();    
  }

  private buildForm() {
    const group: Record<string, any> = {};
    for (const field of this.config.fields) {
      const validators = field.required ? [Validators.required] : [];
      group[field.name] = ['', validators];
    }
    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('✅ Form Submitted:', this.form.value);
    } else {
      console.log('❌ Form Invalid');
    }
  }
}
