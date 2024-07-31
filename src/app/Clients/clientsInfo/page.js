'use client'; 

import React, { Suspense } from 'react';
import DeshBorad from '../../dashboard/DashCompoent';
import Clientinformation from '../../InofrmationClient/Clientinformation';

export default function ClientInfo () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <DeshBorad>
      <Clientinformation />
    </DeshBorad>
    </Suspense>
  );
}


// export default function Page() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ClientInfo />
//     </Suspense>
//   );
// }