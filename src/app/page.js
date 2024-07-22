'use client';

import React, { useState } from 'react';
import DashContant from "./dashboard/page.js";
import Woofit from './authStack/page.js';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
export default function Home() {

  return (
  <>
  <Provider store={store}>
   <Woofit/>
  </Provider>
  </>
  )
}

