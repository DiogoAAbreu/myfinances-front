import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import { Content } from './common';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import Home from './Home';
import Deposit from './Deposit/index';
import AuthProvider from '../contexts/auth.context';
import Withdraw from './Withdraw';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Content>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path='/deposito' element={<Deposit />} />
            <Route path='/saque' element={<Withdraw />} />
          </Routes>
        </AuthProvider>
      </Content>
    </BrowserRouter>
  );
}

export default App;
