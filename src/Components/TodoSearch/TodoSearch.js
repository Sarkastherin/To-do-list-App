import React from 'react'
import './TodoSearch.css'
function TodoSearch({
    searchValue, setSearchValue
}) {
    return (
        <input
            className="input-search"
            type="text"
            placeholder="Llorar mientras estudio"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    )
}
export { TodoSearch }