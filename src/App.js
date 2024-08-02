import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './screens/Landingpage/LandingPage';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
// import { useRoutes } from 'react-router-dom';
import { lazy } from "react";

const App = () =>{
  // const MyNotes = lazy(() => import('./my'));
 

  // const AppRoutes = () => {
  //   return useRoutes( { path: '/mynotes', element: <MyNotes /> });
  // };

  return(
    <BrowserRouter>
    <Header/>
    {/* <main> */}
    {/* <AppRoutes /> */}
    <Switch>
    <Route path="/" component={LandingPage} exact/>
    <Route path="/mynotes" component={MyNotes}/>
    </Switch>

      

    
    {/* </main> */}
    <Footer/>
    </BrowserRouter>
  )
};


export default App;
