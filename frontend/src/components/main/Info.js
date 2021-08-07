import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Info = () => {
    let cards = [
        {
            title: 'Experience',
            content: 'From whitewater, rock climbing, canoeing, to snowboard, ski and marcial arts',
            img: '/assets/card1.png',
            aos: 'fade-right'
        },
        {
            title: 'Service',
            content: 'Whe have designed terms and security protocols for you to only enjoy the journey', 
            img: '/assets/card2.png',
            aos: 'fade-up'
        },
        {
            title: 'Quality',
            content: 'The chance to travel with knowledgable local guides off the common tourist trails', 
            img: '/assets/card3.png',
            aos: 'fade-left'
        },
    ]
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    
    return (

        <section className='infoSection'>
            <h2>Why chose us</h2>
            <div className="cardSection">
                {cards.map((card)=>(
                    <div className="border" data-aos={card.aos} key={card.title}>
                        <article className="cardInfo">
                            <img src={card.img} alt={`${card.title} Icon`}/>
                            <h2>{card.title}</h2>
                            <p>{card.content}</p>
                        </article>
                    </div>
                ))}
            </div>
        </section> 
    )
}
export default Info