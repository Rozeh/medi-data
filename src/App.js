import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Acount from './pages/Acount';
import Dashboard from './pages/Dashboard';


const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;


function App() {
return (
  <>
    <GlobalStyle />
    <Route path="/" exact={ true } component={ Dashboard } />
    <Route path="/acount" component={ Acount } />  
  </>
  );
}

export default App;
