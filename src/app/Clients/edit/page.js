'use client'; 

import React, { Suspense } from 'react';
import DeshBorad from '../../dashboard/DashCompoent';
import EditClient from '../../InofrmationClient/EditClient';

  function EditClientPage() {
  return (
    <DeshBorad>
      <EditClient />
    </DeshBorad>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditClientPage />
    </Suspense>
  );
}