import Footer  from '../components/Footer';
import './style.css';
import Meal from '../components/Meal';



const Menu = () => {
    return(
        <div>
            <h1 className='text-center mt-3'>Menu</h1>
            <Meal />
            <Footer />
        </div>
    )
}
export default Menu