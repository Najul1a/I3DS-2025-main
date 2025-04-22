import React from 'react'
import PromoCard from './PromoCard'

const Promotion = () => {
  return (
    <div id='promotion'>

    <h2>Promoções</h2>
    <div id='itensPromo' className="d-flex flex-wrap gap-4 justify-content-around">
        {/* Aqui você pode adicionar os itens promocionais */}
        <PromoCard/>
        <PromoCard/>
        <PromoCard/>

    </div>
    </div>
  )
}

export default Promotion