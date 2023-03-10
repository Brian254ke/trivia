import {Link } from 'react-router-dom';
const Welcome = () => {
 return (
  <div className="container">
    <div className="inner">
     <p> Good Afternoon </p>
     <p> Welcome to  Trivia </p>
     <p> Create a user to start playing the game</p>
      <Link to = "/signup">
        <button className="btn" type="submit">
         Begin
       </button>
      </Link>
    </div>
  </div>
)
}
export default Welcome;
