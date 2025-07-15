import { Component, inject, computed } from '@angular/core';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form.component';
import { FormConfig } from '../../../../shared/models/forms/interfaces/formConfig.model';
import { GetOptionsDataService } from '../../../../shared/services/httpRequests/getOptionsData.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  imports: [DynamicFormComponent],
})
export class NewTicketComponent {
  getOptionsDataService = inject(GetOptionsDataService);
  priorityOptionsData = toSignal(
    this.getOptionsDataService.getPriotrityOptionsData(),
    {
      initialValue: [],
    }
  );
  categoryOptionsData = toSignal(
    this.getOptionsDataService.getCategoryOptionsData(),
    {
      initialValue: [],
    }
  );

  assignedUserOptionsData = toSignal(
    this.getOptionsDataService.getAssignedUserOtionsId(),
    {
      initialValue: [],
    }
  );

  statusOptionsData = toSignal(
    this.getOptionsDataService.getStatusOptionsData(),
    {
      initialValue: [],
    }
  );

  ticketFormConfig = computed<FormConfig>(() => ({
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
        options: this.priorityOptionsData() as {
          id: number | string;
          name: string;
        }[],
      },
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        required: true,
        optionsKey: 'statuses',
        options: this.statusOptionsData() as {
          id: number | string;
          name: string;
        }[],
      },
      {
        name: 'categoryId',
        label: 'Category',
        type: 'select',
        required: true,
        optionsKey: 'categories',
        options: this.categoryOptionsData() as {
          id: number | string;
          name: string;
        }[],
      },
      {
        name: 'assignedUserId',
        label: 'Assigned To',
        type: 'select',
        required: true,
        optionsKey: 'users',
        options: this.assignedUserOptionsData() as {
          id: number | string;
          name: string;
        }[],
      },
    ],
  }));
}
