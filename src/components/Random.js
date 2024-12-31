import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

    const [gif, setGif] = useState('');

    const [loading, setLoading] = useState('false')


    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource)
    setGif(imageSource);
    setLoading(false);
    }

    useEffect(()=>{
      fetchData();
    },[])

    function clickHandler(){
      fetchData();
    }

  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col 
    gap-y-5 mt-[15px] items-center'>

        <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>Random</h1>

        {
          loading ? (<Spinner/>) : ( <img src= {gif} width={450}></img>)
        }

        <button onClick={clickHandler}
        className='w-9/12 bg-green-200 py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Random