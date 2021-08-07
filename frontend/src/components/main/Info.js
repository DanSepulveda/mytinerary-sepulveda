const Info = () => {
    let cards = [
        {
            title: 'Experience',
            content: 'From whitewater, rock climbing, canoeing, to snowboard, ski and marcial arts',
            img: '/assets/ninja1.png'
        },
        {
            title: 'Service',
            content: 'Whe have designed terms and security protocols for you to only enjoy the journey', 
            img: '/assets/ninja2.png'
        },
        {
            title: 'Quality',
            content: 'The chance to travel with knowledgable local guides off the common tourist trails', 
            img: '/assets/ninja3.png'
        },
    ]
    return (
        <section className='infoSection' data-aos="fade-up">
            <h2>Why chose us</h2>
            <div className="cardSection">
                {cards.map((card)=>(
                    <article className="cardInfo">
                        {/* <img src='/assets/shuriken.png' className="shuriken" /> */}
                        <img src={card.img} />
                        <h2>{card.title}</h2>
                        <p>{card.content}</p>
                    </article>
                ))}
            </div>
        </section> 
    )
}
export default Info