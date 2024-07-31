'use client'; 
import React, { Suspense } from 'react';
import DeshBorad from '../../dashboard/DashCompoent';
import EditClient from '../../InofrmationClient/EditClient';

export default function EditClientPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <DeshBorad>
      <EditClient />
    </DeshBorad>
    </Suspense>
  );
}