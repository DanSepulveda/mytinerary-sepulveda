const video = '/assets/japan.mp4'
const Background = () =>{
    return (
        <div>
            <video autoPlay loop muted style={{width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover', top: '0vh', left: '0vw' }}>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    )
}
export default Background