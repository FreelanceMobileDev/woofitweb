'use client';
import { useState } from 'react';
import LoginWoofit from './../LoginWoofits/page'

const Woofit = () => {
  return (

    <>
      <LoginWoofit/>

    </>
  );
}

export default Woofit;

//  .next
//  node_modules
//  public -- image,index.js
//  src/app -
//      ^
//      |
//  these are folders =_components , _reuseableComponent , authStack , CoachesInformation , InformationClient ,Popups,SettingScreen,dashborad

//  globals.css
//  layout.js
//  page.js

// in _components Folder = LoginWoofit , SignupWoofit ,etc...
// in authStack Folder  = Woofit.js 
// in dashborad Folder = DashComponent.js , DashContant.js 


// import React, { useState } from 'react';
// import DashContant from "./Woofit/DashContant";
// import Woofit from './authStack/Auth';
// export default function Home() {

//   return (
//   <>
//    <Woofit/>
//   </>
//   )
// }

