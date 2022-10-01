import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedbackItem from "./Feedbackitem"
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  // console.log(feedback);
  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
    {feedback.map((item) => (
      <motion.div 
      key={item.id}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      >
        <FeedbackItem  key={item.id} item={item}  />
        </motion.div>
    ))

    }
    </AnimatePresence>
      </div>
  )
  // return (
  //   <div className="feedback-list">
  //   {feedback.map((item) => (
      
  //       <FeedbackItem  key={item.id} item={item} handleDelete ={handleDelete} />
      
  //   ))

  //   }
  //     </div>
  // )
}
// FeedbackList.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }

export default FeedbackList