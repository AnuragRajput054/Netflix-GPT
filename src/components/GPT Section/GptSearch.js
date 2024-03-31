import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSggestion from './GptSggestion'
import { BG_URL } from '../../utils/constaint'

const GptSearch = () => {
  return (
    <div>

<div className=" absolute -z-10">
        <img
          className="w-screen"
          src={BG_URL}
          alt="img"
        ></img>
      </div>

        <GptSearchBar />
        <GptSggestion />


      
    </div>
  )
}

export default GptSearch
