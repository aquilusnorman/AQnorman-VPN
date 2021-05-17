import './App.css';
import Cards from './Cards';
import { Route, BrowserRouter } from 'react-router-dom';

import ShadowSocks from './pages/ShadowSocks';
import Wireguard from './pages/Wireguard';
import V2ray from './pages/V2ray';
import NapsternetV from './pages/NapsternetV';

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className="Title">AQnorman-VPN</div>
        <BrowserRouter>
          <Route exact path="/" component={Cards}/>
          <Route path="/shadowsocks" component={ShadowSocks}/>
          <Route path="/wireguard" component={Wireguard}/>
          <Route path="/v2ray" component={V2ray}/>
          <Route path="/napsternetv" component={NapsternetV}/>
        </BrowserRouter>
      </header>
      <footer className="App-footer">
        Join Telegram ⇀ <a style={{ color: '#fdc912' }} href="https://t.me/joinchat/uAWZTxW-2uVjYjI1">https://t.me/joinchat/uAWZTxW-2uVjYjI1</a>
      </footer>
    </div>
    
      
    </>
  );
}

export default App;
