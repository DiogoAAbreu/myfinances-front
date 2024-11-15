import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import { Content } from './common';
import SignIn from './SignIn/SignIn'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Content>
        <SignIn />
      </Content>
    </BrowserRouter>
  );
}

export default App;
