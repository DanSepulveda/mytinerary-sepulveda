import { Link } from 'react-router-dom'
const Cardcity = (props)=>{
    const {_id, name, region, description, src, src2, src3} = props.city
    return (
        <Link to={`/city/${_id}`} style={{textDecoration: 'inherit'}}>
            <div 
            className={`card-picture fotito${props.index+1}`} 
            style={{backgroundImage: `url('${src}')`}}
            >
                <div className="color">
                    <div style={{width: '100%'}}>
                        <div style={{backgroundImage: `url('${src2}')`, width: '40%', height: '70%'}}></div>
                        <div style={{backgroundImage: `url('${src3}')`}}></div>
                        {/* <img src={src2} style={{width: '40%'}}/>
                        <img src={src3} style={{width: '40%'}}/> */}
                    </div>
                    <h1 style={{color: 'black'}}>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
        
    )
}
export default Cardcity