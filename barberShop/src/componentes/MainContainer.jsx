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
        <section className='container__services'>
            <div className='card__services'>
                <img src="/img/barba.jpg" alt="profissional aparando a barba do cliente"  title='BarberShop'/>
                <h2>Barba</h2>
                <p>R$50,00</p>
            </div>
            <div className='card__services'>
                <img src="/img/cabelo.jpg" alt="profissional cortando cabelo do cliente" title='BarberShop'/>
                <h2>Cabelo</h2>
                <p>R$130,00</p>
            </div>            
            <div className='card__services'>
                <img src="/img/lavaseca.jpg" alt="profissional secando o cabelo do cliente" title='BarberShop'/>
                <h2>Barba + Cabelo</h2>
                <p>R$180,00</p>
            </div>         
        </section>
    </article>
  )
}

export default MainContainer;