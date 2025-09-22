import React from 'react'
import './App.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar'
import CoinTable from './components/CoinTable/CoinTable'
import Pagination from './components/Pagination/Pagination';
import Highlights from './components/Highlights/Highlights';
const api="https://api.coingecko.com/api/v3";

const App = () => {

    const [search,setSearch]=useState("");
    const [coins,setCoins]=useState([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const [showHighlights, setShowHighlights] = useState(false);

    const fetchCoins=async()=>{
      setLoading(true);
      setError("")
      try{
      const response=await axios.get(`${api}/coins/markets`,{
        params:{
          vs_currency:"usd",
          order:'market_cap_desc',
          per_page:10,
          page:page,
        }
      })
      console.log(response.data)
      setCoins(response.data);
    }catch(error){
      setError("Error")
    }finally{
      setLoading(false);
    }
    }

    useEffect(()=>{
      fetchCoins();
    },[page]);

    const filteredCoins=coins.filter(
      (coin)=>coin.name.toLowerCase().includes(search.toLowerCase())||coin.symbol.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className='container'>
      <h1>Crypto Dashboard</h1>
      <SearchBar search={search} setSearch={setSearch}/>
      <button onClick={() => setShowHighlights((prev) => !prev)} className='highlight'>
              {showHighlights ? "Hide Highlights" : "Show Highlights"}
      </button>
      {loading && <p>Loading Details</p>}
      {error && <p>{error}</p>}
      {!loading && !error &&<CoinTable coins={filteredCoins}/>}
      <Pagination page={page} setPage={setPage}/>
      {showHighlights && <Highlights coins={coins} />}
    </div>
  )
}

export default App
