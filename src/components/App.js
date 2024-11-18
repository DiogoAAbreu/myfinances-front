import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import { Content } from './common';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import AuthProvider from '../contexts/auth.context';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Content>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </Content>
    </BrowserRouter>
  );
}

export default App;
