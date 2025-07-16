import { computeMsgId } from '@angular/compiler';
import { Component, computed, inject, OnInit } from '@angular/core';
import { FormConfig } from '../../../../shared/models/forms/interfaces/formConfig.model';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { GetOptionsDataService } from '../../../../shared/services/httpRequests/getOptionsData.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-agents',
  standalone: true,
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
  imports: [DynamicFormComponent],
})
export class AgentsComponent implements OnInit{
getOptionsDataService = inject(GetOptionsDataService)
userRoles = toSignal(this.getOptionsDataService.getUserRoles())


  ticketFormConfig = computed<FormConfig>(() => ({
    title: 'New User',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'text', required: true },
      {
        name: 'role',
        label: 'Role',
        type: 'select',
        optionsKey: 'role',
        // options: this.userRoles(),
        required: true,
      },
    ],
  }));

  ngOnInit(): void {
    console.log(this.userRoles());
    
  }
}
