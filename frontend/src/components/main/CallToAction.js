import { NavLink } from 'react-router-dom'
const CallToAction = () =>{
    return (
        <section id='call' className="callToAction" style={{backgroundImage: "url('assets/call.png')"}}>
            <article>
                <div className="callText">
                    <h2>There is nothing to worry about.</h2>
                    <h3>You are one step closer for making your dreams come true!</h3>
                </div>
                <div>
                    <NavLink to='/cities' className="without"><div className="button"><span>Start Now</span></div></NavLink>
                </div>
            </article>
        </section>
    )
}
export default CallToAction