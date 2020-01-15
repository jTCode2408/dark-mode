import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
      <h4>Price Change(24hrs): {coin.price_change_24h}</h4> 
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price}/>
         <p>COIN HIGH(24hrs): {coin.high_24h}</p>
          <span><h3>[ Market Cap: { coin.market_cap} ]</h3></span>
        </div>
        
      ))}
    </div>
  );
};
export default Charts;
