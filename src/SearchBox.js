import React, { useState } from "react";

function SearchBox({ placeholder, data }) {

  const [filteredData, setFilteredData] = useState([])
  const textFilter = (event) => {
    const word = event.target.value
    const filter = data.filter((value) => {
      return (
        value.animalName.toLowerCase().includes(word.toLowerCase())
      )
    })
    if (word === "") {
      setFilteredData([])
    }
    else {
      setFilteredData(filter)
    }
  }

  return (
    <div className="search-box">
      <div className="search-inputs">
        <input type="text" placeholder={placeholder} onChange={textFilter}></input>
      </div>
      {filteredData.length != 0 &&
        <div className="data-result">
          <table className="table-result">
            <tr>
              <th>Nome Popular</th>
              <th>Nome Científico</th>
              <th>Estimativa de Vida (Em Anos)</th>
            </tr>
            {filteredData.map((value) => {
              return (
                <tr>
                  <th>{value.animalName}</th>
                  <th>{value.animalScientificName}</th>
                  <th>{value.animalAverageLifetime}</th>
                </tr>
              )
            })}
          </table>
        </div>
      }
    </div>
  )
}

export default SearchBox
