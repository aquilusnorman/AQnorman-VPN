import React from 'react';
import Card from './Card';
import './Cards.css';

import { Container, Row, Col } from 'react-bootstrap'

import shadowsocksImg from './img/shadowsocks.jpg'
import wireguardImg from './img/wireguard.jpg'
import v2rayImg from './img/v2ray.png'
import napsternetVImg from './img/napsternetV.jpg'


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
  {
    img: napsternetVImg,
    title: "NapsternetV",
    link: 'napsternetv'
  }
]

export default function Cards(){

    return (
      <div>
        <Container>
          <Row>
            {cardList.map((card) => (
              <Col sm><Card img={card.img} title={card.title} link={card.link}/></Col>
            ))}
          </Row>
        </Container>
      </div>
    )
}