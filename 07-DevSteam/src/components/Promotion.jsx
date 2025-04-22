import React from 'react'
import PromoCard from './PromoCard'

const Promotion = () => {
  return (
    <div id='promotion'>

    <h2>Promoções</h2>
    <div id='itensPromo'>
        {/* Aqui você pode adicionar os itens promocionais */}
        <PromoCard/>

    </div>
    </div>
  )
}

export default Promotion