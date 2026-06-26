import React from 'react'

function Table({products}) {
 return ( 
    
    <>
   { products.map(
        (product , index) => { return (
            <tr key={index}>
                <td className="px-6 py-4 text-center">{product.pname}</td>
                <td className="px-6 py-4 text-center">{product.pPrice}</td>
                <td className="px-6 py-4 text-center">{product.pDiscription}</td>
            </tr>
        )
        } 
    ) }
   </>
    
    
  )
}

export default Table
