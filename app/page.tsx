"use client"

import Image from 'next/image'
import First from './sections/01-Founding_of_KKK/01-Founding_of_KKK'
import Second from './sections/02-Implication_of_Wealthy_Filipinos'
import Sixth from './sections/06-Betrayal_of_Emilio_Aguinaldo'
import ScrollToTop from './sections/ScrollToTop'
import Fourth from './sections/04-Antonio Luna Betraying the Katipunan and Jose Rizal'

export default function Home() {
  return (
    <div>
      <Second/>
      <Fourth/>
      <Sixth/>
      <ScrollToTop/>
    </div>  
  )
}
