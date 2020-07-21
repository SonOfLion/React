import React from 'react';

const Filter = ({filterText, count, onChange}) => {
    return (
        <div>
            <div className="filter">
                <span className="filter__count">{count}</span>
                <input 
                onChange ={onChange} 
                type="text" 
                className="filter__input"
                value={filterText}/>
            </div>
        </div>
    );
};

export default Filter;