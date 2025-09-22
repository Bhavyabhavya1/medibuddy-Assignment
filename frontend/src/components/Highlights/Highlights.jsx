import React from 'react'

const Highlights = ({coins}) => {

    if (coins.length === 0) return null;
  function getTopGainers(list, n) {
    return [...list]
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      .slice(0, n);
  }
  function getTopLosers(list, n) {
    return [...list]
      .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      .slice(0, n);
  }

  function getTopVolume(list, n) {
    return [...list].sort((a, b) => b.total_volume - a.total_volume).slice(0, n);
  }

  const topGainers = getTopGainers(coins, 3);
  const topLosers = getTopLosers(coins, 3);
  const topVolume = getTopVolume(coins, 3);

  return (
    <div>
      <h2>Highlights</h2>
      <div>
        <div>
          <h3>Top Gainers</h3>
          <ul>
            {topGainers.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()}) +{coin.price_change_percentage_24h?.toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Top Losers</h3>
          <ul>
            {topLosers.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()}) {coin.price_change_percentage_24h?.toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Highest Volume</h3>
          <ul>
            {topVolume.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()}) ${coin.total_volume.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Highlights
