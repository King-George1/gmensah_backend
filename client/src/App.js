import './App.css';
import { NavBar } from './components/NavBarComponent/NavBar';
import { SignIn } from './components/SignInCompononent/SignIn';
import { Shop } from './components/RegisterComponent/Register';
import { HomePage } from './components/HomePageComponent/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AskQuestion } from './components/AskQuestion/AskQuestionComponent';
import { useState } from 'react';


function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  return (
    <Router>
        <div className="containerBody">
          <NavBar authenticated={isAuthenticated} >
          </NavBar>
          <Switch>
            <Route path="/" exact component={HomePage}  />
            <Route 
            path="/about" 
            // component={AboutUs} 
            render={(props) => (
            <SignIn {...props} authenticate={setIsAuthenticated} />
          )}
            />
            <Route path="/shop" component={Shop} />
            <Route path="/askQuestion" component={AskQuestion} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
