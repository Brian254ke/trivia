import {useLocation} from  'react-router-dom';
const Home = () => {
  const location = useLocation();
  const name = location.state.activename;
  return (
  <div className="container">
    <div className ="inner">
      <p>Welcome back {name} </p>
      <p> You cannot think of what you dont know </p>
      <p> Start Trivia now </p>
          <button className="btn" type="submit">
           Start
          </button>
    </div>
  </div>
)

}

export default Home;
