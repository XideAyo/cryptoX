import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import SingleCoin from './pages/SingleCoin';


function App() {

  const useStyles =makeStyles(() =>( {
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      height: "100vh",
      fontFamily: "Montserrat"
    }
  }));

  const classes = useStyles()
  return (
      <Router>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path='/' exact element= {<Home />}/>
            <Route path='/coins/:id' exact element= {<SingleCoin />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
