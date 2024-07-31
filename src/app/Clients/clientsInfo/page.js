'use client'; 

import React, { Suspense } from 'react';
import DeshBorad from '../../dashboard/DashCompoent';
import Clientinformation from '../../InofrmationClient/Clientinformation';

 function ClientInfo () {
  return (
    <DeshBorad>
      <Clientinformation />
    </DeshBorad>
  );
}


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientInfo />
    </Suspense>
  );
}