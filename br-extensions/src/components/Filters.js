import React, { useState } from 'react'

const filterActions = [
  {
    content: 'All',
    action: 'all',
    id: 0
  },
  {
    content: 'Active',
    action: 'active',
    id: 1
  },
  {
    content: 'Inactive',
    action: 'inactive',
    id: 2
  }
]

function Filters({ filterAction, handleFilterActions }) {

  const filterHandler = (evt, actions) => {
    console.log(actions);
    handleFilterActions(actions.action);
  }

  return (
    <div className='filter_container flex justify-between items-center mt-10'>
      <div className='filter_headers text-text-dark dark:text-text-light text-2xl font-extrabold'>Extensions List</div>
      <div className='filter_actions'>
        {
          filterActions.map((actions, idx) => (
            <span
              key={idx}
              onClick={(evt) => filterHandler(evt, actions)} 
              className={filterAction.toLowerCase() === actions.action ? 'filter_chips border-light bg-red text-text-light dark:text-text-dark'
                : 'filter_chips border-light bg-surface-light dark:bg-surface-dark text-text-dark dark:text-text-light' }
            >
                {actions.content}
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default Filters