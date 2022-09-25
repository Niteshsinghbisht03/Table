import React from 'react';

function TableRow({number,index}){
  return(
    <div className="text-2xl">
      {number} * {index} = {number*index}
    </div>
    
  )
}

export default TableRow;