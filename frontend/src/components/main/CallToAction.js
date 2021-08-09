import { NavLink } from 'react-router-dom'
const CallToAction = () =>{
    return (
        <section id='call' className="callToAction">
            <article>
                <img src='/assets/ninja.png' alt='Ninja Icon' className='ninja' />
                <div className='textContainer'>
                    <div className="callText">
                        <h2>There is nothing to worry about.</h2>
                        <h3>You are one step closer for making your dreams come true!</h3>
                        <h3>Choose your destination.</h3>
                        <NavLink to='/cities' className="button">Start Now</NavLink>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default CallToAction