import React from 'react'
import Table from './Table'

const Card = () => {
  const products = [
    {
      pname: "mobile phone",
      pPrice: "1000$",
      pDiscription: "high quality and high performance"
    },
    {
      pname: "car",
      pPrice: "20000$",
      pDiscription: "powerfull and most economic ever"
    },
    {
      pname: "ak-47",
      pPrice: "3000$",
      pDiscription: "the most horrible gun in the word"
    },
    {
      pname: "headphone",
      pPrice: "200$",
      pDiscription: "high resolution quality"
    }
  ]

  return (
    <div className="flex justify-center m-10">
      <table className="border border-gray-300 shadow-lg rounded-lg overflow-hidden ">
        <thead className="bg-cyan-900 text-white">
          <tr>
            <th className="px-6 py-3 text-center">Product Name</th>
            <th className="px-6 py-3 text-center">Price</th>
            <th className="px-6 py-3 text-center">Description</th>
          </tr>
        </thead>

        <tbody>
          <Table products={products} />
        </tbody>
      </table>
    </div>
  )
}

export default Card
