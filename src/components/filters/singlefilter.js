import React, { useState } from 'react';

const SingleFilter = ({options, onChangeValue}) => {

    const [optionValue,setOptionValue] = useState("")
    
    const handleChange = (e) => {
        setOptionValue(e.target.value)
        onChangeValue(e.target.value)
    }

    return(<div className='filters-single'>
        <select onChange={handleChange} value={optionValue} className="filters-select">
            {
                options.map( item => {
                    return(<option value={item.Country}>{item.Country}</option>)
                })
            }
        </select>
    </div>)
}

export default SingleFilter