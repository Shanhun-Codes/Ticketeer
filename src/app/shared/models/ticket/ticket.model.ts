import { TicketPriority } from './types/priority.model';
import { TicketStatus } from './interfaces/status.model';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: TicketPriority;
  createdDate: string;
  assignedUserId: number;  
  createdBy: number;      
  categoryId: number;
}

