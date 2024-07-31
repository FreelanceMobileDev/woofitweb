'use client';

import React, { Suspense } from 'react';
import Woofit from './authStack/page.js';


export default function Home() {

  return (
  <>
  <Suspense fallback={<>Loading...</>}>
  <Woofit/>
  </Suspense>
 
  </>
  )
}

