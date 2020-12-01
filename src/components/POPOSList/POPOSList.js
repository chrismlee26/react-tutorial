import React, { useState } from 'react'
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json'


function POPOSList() {
  const [ query, setQuery ] = useState('')
  // const spaces = data.map(({ title, address, images, hours }, i) => {
  // const spaces = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj, i) => {
    const spaces = data.filter(({title, address}) => {
      // true if query is in title
      const inTitle = title.toLowerCase().includes(query.toLowerCase())
      // true if query is in address
      const inAddress = address.toLowerCase().includes(query.toLowerCase())
      // return true if either is true
      return inTitle || inAddress
  }).map(({title, address, images, hours}, i) => {
    return (

      <POPOSSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">
            <form>
                <input 
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {spaces}
    </div>
  )
}

export default POPOSList