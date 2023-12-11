"use client"

import Image from 'next/image'
import Header from './sections/00-Header'
import First from './sections/01-Founding_of_KKK'
import Second from './sections/02-Implication_of_Wealthy_Filipinos'
import Third from './sections/03-Spanish_Discovery_of_the_Katipunan'
import Fourth from './sections/04-Antonio Luna Betraying the Katipunan and Jose Rizal'
import Fifth from './sections/05-Rivalry between Emilio and Andres'
import Sixth from './sections/06-Betrayal_of_Emilio_Aguinaldo'
import Seventh from './sections/07-Death_of_Andres_Bonifacio'
import Eighth from './sections/08-Telegrams_to_Luna'
import ScrollToTop from './sections/ScrollToTop'
import './bg.css'



export default function Home() {
  return (
    <div>
      <Header text='Betrayals that Hindered Our Progress for Independence'/>
      {/* <First/> */}
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Eighth/>
      <ScrollToTop/>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>  
  )
}
