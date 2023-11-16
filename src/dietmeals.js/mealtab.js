import { Link } from 'react-router-dom';
import './mealtab.css';
import { useState } from 'react';
const MealnavBar = () => {


    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className='container'>
            <div className="nav-tabsdev">
                <Link to={'/mealb'}>
                    <div
                        className={`devtab ${activeTab === 1 ? 'active' : 'NonActive'}`}
                        onClick={() => handleTabClick(1)}
                    ><img className='breakfast-imgdev' src='https://img.freepik.com/free-vector/breakfast-realistic-set_1284-12689.jpg?w=740&t=st=1698723648~exp=1698724248~hmac=e50916b7f23e663c65619f2e872cafb124181a200ae3ad50340b74cac7079f65' />
                        Breakfast
                    </div>
                </Link>
                <Link to={'/meall'}>
                    <div
                        className={`devtab ${activeTab === 2 ? 'active' : 'NonActive'}`}
                        onClick={() => handleTabClick(2)}
                    ><img className='breakfast-imgdev' src='https://img.freepik.com/free-vector/indian-food-composition_1284-11949.jpg?w=740&t=st=1698647237~exp=1698647837~hmac=be281e26309072240c4d6c43d509d51b671f4d40b88d815467ecd19647fb4792' />
                        Lunch
                    </div>
                </Link>
                <Link to={'/meald'}>
                    <div
                        className={`devtab ${activeTab === 3 ? 'active' : 'NonActive'}`}
                        onClick={() => handleTabClick(3)}
                    ><img className='breakfast-imgdev' src='https://img.freepik.com/premium-photo/dining-table-ready-party-ballroom_306105-850.jpg?w=740' />
                        Dinner
                    </div>
                </Link>
                <Link to={'/meals'}>
                    <div
                        className={`devtab ${activeTab === 4 ? 'active' : 'NonActive'}`}
                        onClick={() => handleTabClick(4)}
                    ><img className='breakfast-imgdev' src='https://img.freepik.com/free-photo/christmas-sweets-platter_114579-31135.jpg?w=740&t=st=1698647288~exp=1698647888~hmac=e3f01159fb1bb0af99288bc7827869ce516917524375ccbf19c0814e5934f6c0' />
                        Snacks
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default MealnavBar;