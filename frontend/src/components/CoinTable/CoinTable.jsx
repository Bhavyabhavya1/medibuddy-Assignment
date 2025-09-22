import React from 'react'
import './Cointable.css'

const CoinTable = ({coins}) => {
  return (
    <table border='1' cellPadding="5">
      <thead>
        <tr>
          <th>Rank</th>
          <th className='name'>Name</th>
          <th>Price</th>
          <th>24h Change</th>
          <th>Market Cap</th>
          <th>Volume</th>
        </tr>
        
      </thead>
      <tbody>
        {coins.map((coin)=>(
          <tr key={coin.id}>
            <td>{coin.market_cap_rank}</td>
            <td>
              <img src={coin.image} className='image'/>{" "}
              {coin.name} ({coin.symbol.toUpperCase()})
            </td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td>{coin.price_change_percentage_24h?.toFixed(2)}%</td>
            <td>${coin.market_cap.toLocaleString()}</td>
            <td>${coin.total_volume.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CoinTable
