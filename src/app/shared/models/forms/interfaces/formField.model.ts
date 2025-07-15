import { TicketPriority } from '../../ticket/interfaces/priority.model';
import { TicketStatus } from '../../ticket/interfaces/status.model';
import { FormType } from '../types/formType.model';

export interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: { id: number | string; name: string }[];
}
