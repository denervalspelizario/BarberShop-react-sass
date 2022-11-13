import React from 'react'
import '../styles/componentes/MainContainer.sass'

function MainContainer()  {
  return (
    <article className='header__container'>
        <h1>Bem-vindo a Barber Shop</h1>
        <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoa. Aqui temos uma equipe premiada que demonstrou o talento  de mestres barbeiros em vários concursos
          de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado 
        </p>
        <p>S. Kelly</p>
        <div className='container__image'>
            <img src="/img/barba.jpg" alt="profissional aparando a barba do cliente"  title='BarberShop'/>
            <img src="/img/cabelo.jpg" alt="profissional cortando cabelo do cliente" title='BarberShop'/>
            <img src="/img/lavaseca.jpg" alt="profissional secando o cabelo do cliente" title='BarberShop'/>
        </div>
    </article>
  )
}

export default MainContainer;