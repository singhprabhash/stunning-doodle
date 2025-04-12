import React, { useState } from 'react'
import Search from '../components/Search'
import Filters from '../components/Filters'
import data from "../data.json";
import ExtCards from '../components/ExtCards';

function Extension() {
  const [filterAction, setFilterAction] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [masterData, setMasterData] = useState(data); // original reference
  const [extensions, setExtensions] = useState(data); // visible/filtered data

  const filterAndSearch = (newData, search = searchInput, filter = filterAction) => {
    let result = newData;

    if (filter.toLowerCase() === 'active') {
      result = result.filter(ext => ext.isActive);
    } else if (filter.toLowerCase() === 'inactive') {
      result = result.filter(ext => !ext.isActive);
    }

    if (search) {
      result = result.filter(ext =>
        ext.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setExtensions(result);
  };

  const handleFilterActions = (action) => {
    setFilterAction(action);
    filterAndSearch(masterData, searchInput, action);
  };

  const handleSearch = (evt) => {
    const { value } = evt.target;
    setSearchInput(value);
    filterAndSearch(masterData, value, filterAction);
  };

  const toggleActiveState = (state, name) => {
    const updatedMaster = masterData.map(ext =>
      ext.name === name ? { ...ext, isActive: state } : ext
    );
    setMasterData(updatedMaster);
    filterAndSearch(updatedMaster);
  };

  return (
    <div>
      <Search 
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <Filters 
        filterAction={filterAction} 
        handleFilterActions={handleFilterActions}
      />
      <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10'>
        {
          extensions.map((ext, idx) => (
            <ExtCards 
              key={ext.name}
              name={ext.name} 
              desc={ext.description} 
              isActive={ext.isActive} 
              src={ext.logo}
              toggleActiveState={toggleActiveState}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Extension