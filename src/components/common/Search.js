import React from 'react'

export const Search = ({search, setSeatch}) => {
  return (
    <div className='col-sm-6 mb-4'>
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                    className='form-control'
                    type='search'
                    role='searchbox'
                    placeholder='Search students...'
                    value={search}
                    onChange={(e)=>setSeatch(e.target.value)}>
            </input>
        </form>
    </div>
  )
}
