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
    <div className={styles.popupDisplay} style={{ height: '100vh' }}>

      <div className={styles.popupContent} style={{ marginTop: 40 }}>
        <div className={styles.space_div}>
          <div style={{ width: 60 }} />
          <div className={styles.popheadertxt}>Client Filter</div>
          <div onClick={() => setFilter(false)} className={styles.greycrossicon} style={{ cursor: "pointer" }} ><CrossIcon /></div>
        </div>
        <div style={{ marginTop: 30, width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>


          <div style={{ width: '85%', marginBottom: 20, display: "flex", justifyContent: "space-between" }} >
            <label>Sort by</label>
          </div>

          <div style={{ width: '60%', marginBottom: 20, display: "flex", justifyContent: "space-between" }} >
            <label>Alphabetically</label>
            <input type='radio'
              value='asc'
              checked={alphabets === 'asc'}
              onChange={handleChangeSortBy}
            />
          </div>

          <div style={{ width: '85%', marginBottom: 20, display: "flex", justifyContent: "space-between" }} >
            <label>Rates</label>
          </div>

          <div style={{
            width: '60%',
            marginBottom: 20,
            overflow: "auto",
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
              <label>All</label>
              <input type='radio'
                value='all'
                checked={selectedValue === 'all'}
                onChange={handleChange}
              />
            </div>
            {getRetes.getAllRatesData.map((item, i) =>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }} key={i} >
                <label>{item.name}</label>
                <label> ${item.priceForTraining}</label>
                <input type='radio'
                  value={item?._id}
                  checked={selectedValue == item?._id}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", cursor: "pointer", }}>
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