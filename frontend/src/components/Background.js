const video = '/assets/intro.mp4'


const Background = () =>{
    return (
        <div style={{
            height: '100vh'
        }}>
            <video autoPlay loop muted style={{ filter: `blur(3px)`, WebkitFilter: `blur(3px)`, width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'cover' }}>
                <source src={video} type='video/mp4'/>
            </video>
            <h1>HOLA</h1>
        </div>
    )
}

export default Background