import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Patient } from './types';

interface PatientStore {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
  updatePatient: (id: string, updates: Partial<Patient>) => void;
  deletePatient: (id: string) => void;
}

export const usePatientStore = create<PatientStore>()(
  persist(
    (set) => ({
      patients: [],
      addPatient: (patient) =>
        set((state) => ({
          patients: [...state.patients, patient],
        })),
      updatePatient: (id, updates) =>
        set((state) => ({
          patients: state.patients.map((patient) =>
            patient.id === id ? { ...patient, ...updates } : patient
          ),
        })),
      deletePatient: (id) =>
        set((state) => ({
          patients: state.patients.filter((patient) => patient.id !== id),
        })),
    }),
    {
      name: 'patient-store',
    }
  )
);