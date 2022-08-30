import React from "react";
import info from "../information";

function Data() {
  console.log(info);
  return (
    <div>
      <ul>
        {info.map((value, ind) => {
          return (
            <li key={ind}>
              <h4>{value.name}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Data;
