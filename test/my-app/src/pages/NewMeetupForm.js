import Card from "../components/ui/Card";
import {useRef} from 'react';


function NewMeeupForum(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    
    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='title'>Meetup title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div>
                <label htmlFor='image'>Meetup image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div>
                <label htmlFor='address'>Meetup address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div>
                <label htmlFor='description'>Meetup description</label>
                <textarea type='text' required id='description' rows='3' ref={descriptionInputRef}/>
            </div>
            <div>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeeupForum;