import React, { useState } from 'react';

const ListItem = (props) => {
  const [status, setStatus] = useState(true);
  console.log(props)
  console.log("123")
  if (status) {
    return (
      <div className="d-flex justify-content-between bg-white h3">
        <div>
          {/* {props.number} */}
          <span>{props.number}.</span>
        </div>
        <div>
          {/* {props.name} */}
          <span>{props.name}</span>
        </div>
        <div>
          <a href="#" className="btn btn-xs btn-rounded btn-outline-danger" onClick={() => props.removeItem(props.number)}> ✖ </a>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <span className="text-white">asdfasdf</span>
      </div>
    )
  }
}

export default ListItem;