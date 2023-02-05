import {useContext} from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';


function FavoriteMeetUpsPage(){
    const favoriteCtx = useContext(FavoritesContext);
    
    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>You don't have favorites</p>
    }else{
        content = <MeetupList meetups={favoriteCtx.favorites}/>}

    return <section>
        <h1>My Favorite</h1>
        {content}
    </section>;
}

export default FavoriteMeetUpsPage;