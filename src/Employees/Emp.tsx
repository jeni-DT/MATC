import Records from '../MOCK_DATA.json';
import React from 'react'

const Emp = () => {
  return (
    <div>
        <h1>Employees</h1>
        {
            Records.map((record,index)=>{
                return(
                    <div key={index}>
                    <div className="col-lg-4 mt-2">
                    <div className="card" style={{ width: "18rem;" }}>
                      <img className="card-img-top" src={record.image} alt="Card image cap" />
                    </div>
                  </div>
                  </div>
                )
            })
        }
    </div>
  )
}

export default Emp