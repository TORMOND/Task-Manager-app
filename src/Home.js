import './index.css';
import NavBar from './NavBar';
import Todos from './Todos';

const Home = () => {
    return ( 
        <template>

            <div className="Home">
                <NavBar HomePage="homepage" />
        <Todos />
               
            </div>
            
        </template>
     );
}
 
export default Home;