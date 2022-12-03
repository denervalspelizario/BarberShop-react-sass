import React from 'react'
import Cards from './Cards';
import ProdutoImage from '/img/cabelo.jpg';
import ProdutoImage2 from '/img/barba.jpg';
import ProdutoImage3 from '/img/lavaseca.jpg';

import '../styles/componentes/MainContainer.sass'

function MainContainer(props)  {

  const servicos = [
    {id: 1, produto: 'Corte', preco: '80,00', foto: ProdutoImage},
    {id: 2, produto: 'Barba', preco: '60,00', foto: ProdutoImage2},
    {id: 3, produto: 'Corte & Barba', preco: '110,00', foto: ProdutoImage3},
  ]




  return (
      <article className='main__container' id='sobre'>
        <h2>Bem-vindo a Barber Shop</h2>
        <p className='main__text--bold'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoa. Aqui temos uma equipe premiada que demonstrou o talento  de mestres barbeiros em vários concursos
          de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado. 
        </p>
        <p className='main__text--style'>S. Kelly</p>
        <div className='servico__container'>
          {servicos.map((servico) => (
          <Cards  subTitle={servico.produto} text={servico.preco} imagem={servico.foto} />
          ))}          
        </div>
        
      </article>
  )
}

export default MainContainer;