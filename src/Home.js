import React from 'react';
import Card from './Card';
import './Home.css';
import { BuyOutlineBanner, AskAQ, BoycottNews } from './pages/AQbanner';

import { Container, Row, Col, Image } from 'react-bootstrap'

import shadowsocksImg from './img/shadowsocks.jpg'
import wireguardImg from './img/wireguard.jpg'
import v2rayImg from './img/v2ray.png'
import napsternetVImg from './img/napsternetV.jpg'
import Marquee from 'react-fast-marquee';


const cardList = [
  {
    img: shadowsocksImg,
    title: "ShadowSocks",
    link: 'shadowsocks'
  },
  {
    img: wireguardImg,
    title: "Wireguard",
    link: 'wireguard'
  },
  {
    img: v2rayImg,
    title: "V2ray",
    link: 'v2ray'
  },
]

export default function Home(){

    return (
      <>
      <div className="root">
        <div className="home-description">
        AQnorman-VPN မှကြိုဆိုပါတယ်။ ShadowSocks, Wireguard နဲ့ V2ray အတွက်လိုအပ်တာတွေကိုတော့ ဒီ Site မှာ ရှာလိုရပါတယ်။ 
        Outline Private Key ဝယ်ချင်တာပဲ ဖြစ်ဖြစ် V2ray Server ထောင်ချင်တာ ဝယ်ချင်တာပဲဖြစ်ဖြစ် Telegram Group or 
        Direct Message ကနေ မေးနိုင်ပါတယ်။
        </div>
        <Container>
          <Row>
            {cardList.map((card) => (
              <Col sm><Card img={card.img} title={card.title} link={card.link}/></Col>
            ))}
          </Row>
        </Container>
        <hr/>
          <p className="sub-title"><strong>သင်ကိုယ်တိုင် Server ထောင်ချင်သလား</strong></p>
          <div className="general-text">
            အခုလက်ရှိတော့ All Sim Server ထောင်ချင်ရင်တော့ AWS မှာထောင်လိုရပါတယ်။ V2ray Server တွေထောင်ချင်ရင်တော့ 
            Digitalocean နဲ့ Vultr ကို recommend ပေးပါတယ်ဗျ။
            အောက်မှာ Digitalocean နဲ့ Vultr ဖွင့်ချင်ရင် ပုံလေးကို နှိပ်တာနဲ့ Account ဖွင့်လိုရပါပြီဗျ။ 
            ကျွန်တော်ပေးတဲ့ Referral Link နဲ့ ဖွင့်ရင် <b>2 လ သုံး $100 Free</b> ရမှာမို Server ထောင်ချင်တဲ့ သူတွေ အတွက်တော့ အဆင်ပြေမှာပါ။
          </div>

          <a href="https://www.digitalocean.com/?refcode=fb7b796b4337&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
            <Image className="developer-referral" 
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" 
            alt="DigitalOcean Referral Badge"/>
          </a>

          <a href="https://www.vultr.com/?ref=8809343-6G">
            <Image className="developer-referral" 
            src="https://www.vultr.com/media/banners/banner_728x90.png" />
          </a>
          <hr/>
      </div>
      </>
    )
}