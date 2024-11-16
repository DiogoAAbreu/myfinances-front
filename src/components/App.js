import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import { Content } from './common';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Content>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
