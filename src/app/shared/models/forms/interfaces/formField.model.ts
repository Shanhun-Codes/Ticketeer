import { FormType } from "../types/formType.model";

export interface FormField {
  name: string;
  label: string;
  type: FormType
  required?: boolean;
  optionsKey?: string; 
  options?: string[];  
}


