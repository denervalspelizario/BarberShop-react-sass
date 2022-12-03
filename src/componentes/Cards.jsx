import '../styles/componentes/Cards.sass';

const Cards = (props) => {
  return (
    <section className='container__services'>
        <div className='card__services'>
            <img src={props.imagem} alt="profissional aparando a barba do cliente"  title='BarberShop'/>
            <h3>{props.subTitle}</h3>
            <p>{props.text}</p>
        </div>          
    </section>
  )
}

export default Cards;