import { TicketPriority } from './interfaces/priority.model';
import { TicketStatus } from './interfaces/status.model';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdDate: string;
  assignedUserId: number;  
  createdBy: number;      
  categoryId: number;
}

