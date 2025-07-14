import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { FormConfig } from '../../../../shared/models/forms/interfaces/formConfig.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  imports: [DynamicFormComponent],
})
export class NewTicketComponent {
  ticketFormConfig: FormConfig = {
    title: 'Create Ticket',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        required: true,
      },
      {
        name: 'priority',
        label: 'Priority',
        type: 'select',
        required: true,
        optionsKey: 'priorities',
      },
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        required: true,
        optionsKey: 'statuses',
      },
      {
        name: 'categoryId',
        label: 'Category',
        type: 'select',
        required: true,
        optionsKey: 'categories',
      },
      {
        name: 'assignedUserId',
        label: 'Assigned To',
        type: 'select',
        required: true,
        optionsKey: 'users',
      },
    ],
  };
}
