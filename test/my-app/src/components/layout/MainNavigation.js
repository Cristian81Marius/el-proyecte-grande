import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
import { useContext } from 'react';


function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>All new meetup</Link>
                </li>
                <li>
                    <Link to='/favorite'>Favorites Meetups</Link>
                    <span>{favoriteCtx.totalFavorites}</span>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;