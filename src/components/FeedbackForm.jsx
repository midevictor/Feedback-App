
import {useState, useContext, useEffect} from 'react'
import Card from "./shared/Card"
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  //a state text and setText to update the text field
  const [text, setText] =  useState("");
  //a state rating and setRating to update the rating field
  const [rating, setRating] =  useState("10");
  //a state btnDisabled and setBtnDisabled to disable the submit button
  const [btnDisabled, setbtnisabled] =  useState(true);
  // a state message and setMessage to update the message field
  const [message, setMessage] =  useState("");
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true ){
      setbtnisabled(false);
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);
  const handleTextChange =(e) => {
    if(text === "") {
   
    setbtnisabled(true)
    setMessage(null)
  }
  else if( text !== "" && text.trim().length <= 10){
    setbtnisabled(true)
    setMessage("text must be at least 10 characters")

  }
  else{
    setbtnisabled(false)
    setMessage(null)
  }
   setText(e.target.value);
}
//A Function  handlesubmit that handleTextChange
const handleSubmit = (e) => {
  e.preventDefault();
  //if the text passed into the input is greater than 10 characters
  if(text.trim().length > 10){
    
    const newFeedback = {
      text,
      rating,
    }
    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
    }
    else{
      addFeedback(newFeedback);
    }
    addFeedback(newFeedback)
    setText("")
  }
}
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select = {(rating) => setRating(rating)}/>
        <div className="input-group">
          <input onChange = {handleTextChange}type="text" placeholder="Write a Review" value={text}/>
          <Button type="submit" isDisabled = {btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
