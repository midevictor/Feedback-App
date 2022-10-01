import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Imported the header files from the header folder
import Header from "./components/Header";
//Imported the feedback List component from the feedback folder
import FeedbackList from "./components/FeedbackList";
//Imported the Feedback Stats
import FeedbackStats from "./components/FeedbackStats";
//Imported the FeedbackForm
import FeedbackForm from "./components/FeedbackForm";
//Imported the About Page
import AboutPage from "./Pages/AboutPage";
// import AboutIconLink from "./components/AboutIconLink";
import AboutIconLink from "./components/AboutIconLink";
//Imported the FeedbackProvider from te context
import { FeedbackProvider } from "./context/FeedbackContext";
//Imported the NavLink form react-router dom
import { NavLink } from "react-router-dom";
//Imported the card component
import Card from "./components/shared/Card";
function App() {
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  //   // console.log(newFeedback)
  // };
  // const deleteFeedback = (id) => {
  // //   if (window.confirm("Are you sure you want to delete this feedback?")) {
  // //     setFeedback(feedback.filter((item) => item.id !== id));
  // //   }
  // // };
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
          <Card>
            <div className="cardNav">
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </div>
          </Card>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
