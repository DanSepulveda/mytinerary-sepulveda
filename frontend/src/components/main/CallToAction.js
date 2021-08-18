import '../../styles/callToAction.css'
import { NavLink } from 'react-router-dom'

const CallToAction = () =>{
    return (
        <section id='call' className="call-action">
            <article>
                <img src='/assets/ninja.png' alt='Ninja Icon' className='ninja' />
                <div className='text-container'>
                    <div className="call-text">
                        <h2>There is nothing to worry about.</h2>
                        <h3>You are one step closer for making your dreams come true!</h3>
                        <h3>Choose your destination.</h3>
                        <NavLink to='/cities' className="call-button">Start Now</NavLink>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default CallToAction