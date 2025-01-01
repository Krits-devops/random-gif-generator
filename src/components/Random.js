import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

    const {gif, loading, fetchData} = useGif();

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