'use client';
import React, { useState } from 'react';
import { CrossIcon } from '../../../public';
import styles from './Popups.module.css';
// import Inputfield from '../_reuseableComponent/Inputfield';
// import SelectOption from '../_reuseableComponent/SelectOption';


function FilterClients({ setFilter, getRetes, setFilterData, setPreFilter, preFilter }) {
  const [selectedValue, setSelectedValue] = useState(preFilter?.selectedValue ? preFilter?.selectedValue : "");
  const [alphabets, setAlphabets] = useState(preFilter?.alphabets ? preFilter?.alphabets : "");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeSortBy = (event) => {
    if(event.target.value=="all"){
      setAlphabets("");
    }else{
      setAlphabets(event.target.value);
    }
  };

  const onSave = () => {
    
    setFilterData(`&sort=${alphabets}&rate=${selectedValue}`)
    setPreFilter({ alphabets: alphabets, selectedValue: selectedValue })
    setFilter(false)
  }
  const resetFilter = () => {
    setAlphabets("")
    setSelectedValue("")
    setPreFilter({})
  }

  return (
    <div className={styles.popupDisplay} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className={styles.popupContent} style={{ width: '90%', maxWidth: 600, backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 20 }}>
      <div className={styles.space_div} style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ flexGrow: 1 }} />
        <div className={styles.popheadertxt} style={{ width: '100%', fontSize: 18, fontWeight: 600 }}>Client Filter</div>
        <div onClick={() => setFilter(false)} className={styles.greycrossicon} style={{ cursor: "pointer", marginLeft: 10 }}>
          <CrossIcon />
        </div>
      </div>
  
      <div style={{ display: 'flex', flexDirection: 'column' }}>
  
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 500 }}>Sort by</label>
          <div style={{ marginTop: 10, display: "flex", alignItems: 'center' }}>
            <label style={{ marginRight: 10 }}>Alphabetically</label>
            <input type='radio' value='asc' checked={alphabets === 'asc'} onChange={handleChangeSortBy} />
          </div>
        </div>
  
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 500 }}>Rates</label>
          <div style={{ marginTop: 10, maxHeight: 300, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <label style={{ marginRight: 10 }}>All</label>
              <input type='radio' value='all' checked={selectedValue === 'all'} onChange={handleChange} />
            </div>
            {getRetes.getAllRatesData.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <label>{item.name}</label>
                <label>${item.priceForTraining}</label>
                <input type='radio' value={item._id} checked={selectedValue === item._id} onChange={handleChange} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", cursor: "pointer", }}>
            <a
              onClick={() => onSave()}
              className={styles.SaveButton} style={{ width: "100%", borderWidth: 0 }} txtstyle={{ color: '#FFF' }} >Save</a>
            <a
              onClick={() => resetFilter()}
              className={styles.SaveButton} style={{ width: "100%", borderWidth: 0 }} txtstyle={{ color: '#FFF' }} >Reset Filter</a>

          </div>
      </div>
    </div>
  </div>
  
  )
}

export default FilterClients