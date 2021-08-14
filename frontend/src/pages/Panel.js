import NewCity from '../components/NewCity'
import ViewCities from '../components/ViewCities'

const Panel = () =>{
    return (
        <div className='mainAdmin'>
            <section className="table">
                <ViewCities />
            </section>
            <section className="newCity">
                <NewCity />
            </section>
        </div>
    )
}
export default Panel