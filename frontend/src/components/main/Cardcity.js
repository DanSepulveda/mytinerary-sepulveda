import { Link } from 'react-router-dom'
const Cardcity = (props)=>{
    const {name, src, description, src2, src3} = props.city
    return (
        <Link to={`/city/${name.toLowerCase()}`}>
            <div 
            className={`card-picture fotito${props.index+1}`} 
            style={{backgroundImage: `url('${src}')`}}
            >
                <div className="color">
                    <div>
                        <img src={src2} style={{width: '40%'}}/>
                        <img src={src3} style={{width: '40%'}}/>
                    </div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
        
    )
}
export default Cardcity