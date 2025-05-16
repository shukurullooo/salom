import React from 'react'
import Hero from '../hero/Hero'
import { HEROS } from '../../static'

const Main = () => {
  let str = "Hello world"
  return (
    <main>
      {
        HEROS?.map((hero) => (
          <Hero key={hero.id} {...hero}/>
        ))
      }
      
    </main>
  )
}
export default Main