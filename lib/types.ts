export interface Patient {
  id: string;
  name: string;
  age: number;
  contact: string;
  healthInfo: string;
  severity: 'Low' | 'Moderate' | 'High';
  condition: string;
  appointmentDate: string;
  submittedAt: string;
}

export type PatientFormData = Omit<Patient, 'id' | 'severity' | 'condition' | 'submittedAt'>;