//Importrd createContext and useState
import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
//initialize the context FeedbackContext
const FeedbackContext = createContext();
//Created the FeedbackProvider passsed the children prop to it so as to wrap all app components
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState(
    [
    ]
  );
  //Created a useState hook for the editing of feedback items and gave it an initial empty object and set the edit to false
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });


  useEffect(() => {
    fetchFeedback();

  }, []);

  //Fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
     setFeedback(data);
    // console.log(data);
    setIsLoading(false);
  }

  const addFeedback = async (newFeedback) => {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
    // console.log(newFeedback)
  };
  //delete Feedback Function
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`/feedback/${id}`, { method : "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
// update feedback function
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updItem)
  })
  const data = await response.json();


    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
//Created a function to edit the feedback that edits a feedback item when the user clicks oon the edit button on the feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        //passed the deleteFeedback function to the context
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
