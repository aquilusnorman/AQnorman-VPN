import './App.css';
import './pages/main.css';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import ShadowSocks from './pages/ShadowSocks';
import Wireguard from './pages/Wireguard';
import V2ray from './pages/V2ray';
import { BoycottNews } from './pages/AQbanner';

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className="Title">
          AQnorman-VPN
          <hr/>
        </div>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/shadowsocks" component={ShadowSocks}/>
          <Route path="/wireguard" component={Wireguard}/>
          <Route path="/v2ray" component={V2ray}/>
        </BrowserRouter>
      </header>
      <BoycottNews/>
      <footer className="App-footer">
        Join Telegram ⇀ <a style={{ color: '#fdc912' }} href="https://t.me/joinchat/uAWZTxW-2uVjYjI1">https://t.me/joinchat/uAWZTxW-2uVjYjI1</a>
      </footer>
    </div>
    
      
    </>
  );
}

export default App;
