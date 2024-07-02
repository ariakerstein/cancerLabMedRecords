import React from 'react';
import { Patient } from '@medplum/fhirtypes';

interface PatientDetailsProps {
  patient: Patient;
}

export const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  return (
    <div>
      <h2>Patient Details</h2>
      <p>Name: {patient.name?.[0]?.given?.join(' ')} {patient.name?.[0]?.family}</p>
      <p>Birth Date: {patient.birthDate}</p>
      <p>Gender: {patient.gender}</p>
      {/* Add more patient details as needed */}
    </div>
  );
};