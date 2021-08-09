import { NavLink } from 'react-router-dom'
const CallToAction = () =>{
    return (
        <section id='call' className="callToAction">
            <article className="bambooImg">
                <div className="bamboo"></div>
                <div className="hola">
                    <h2>There is nothing to worry about.</h2>
                    <h3>You are one step closer for making your dreams come true!</h3>
                </div>
                <div className="flag">
                    <NavLink to='/cities' className="without"><div className="button"><span>Start<br />Now</span></div></NavLink>
                </div>
                <div className="nada"></div>
                <div className="panda"></div>
            </article>
        </section>
    )
}
export default CallToAction