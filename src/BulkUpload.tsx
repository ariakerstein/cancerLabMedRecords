import React from 'react';
import { Patient } from '@medplum/fhirtypes';

interface BulkUploadProps {
  patient: Patient;
}

const BulkUpload = ({ patient }: BulkUploadProps) => {
  return (
    <div>
      <h2>Bulk Upload Records for {patient.name?.[0]?.given?.[0]} {patient.name?.[0]?.family}</h2>
      <p>Bulk upload functionality will be implemented here.</p>
    </div>
  );
};

export default BulkUpload;