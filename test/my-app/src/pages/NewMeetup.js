import NewMeeupForum from "./NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeeupPage(){
    const navigate = useNavigate();

    function onAddMeetupHandler(meetupData){
        fetch(
            'https://learnreact-ad544-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() =>{
            navigate('/');
        });
    }

    return <section>
        <h1>New Meetup Page </h1>
        <NewMeeupForum onAddMeetup={onAddMeetupHandler}/>
    </section>;
}

export default NewMeeupPage;