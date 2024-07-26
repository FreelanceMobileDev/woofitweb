// src/app/settings/page.js
'use client';

import DeshBorad from '../dashboard/DashCompoent';
import SettingSidebar from './settingSidebar'; // Ensure the path is correct

const Page = () => {
  return (
    <DeshBorad>
      <SettingSidebar />
    </DeshBorad>
  );
};

export default Page;
