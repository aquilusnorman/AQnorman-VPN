import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './main.css';
import Marquee from 'react-fast-marquee';

import threeFinger from '../img/threeFinger.jpg'

export function BuyOutlineBanner(){
    return(
        <div className="my-banner">
            <p align="left" className="sub-title"><strong>Outline Private Key ဝယ်ယူလိုပါသလား</strong></p>
            <p align="left" className="general-text">
            Outline Private Key ဝယ်ယူနိုင်ပါတယ်<br/>
            10 GB ⇾ 1000 Ks<br/>
            30 GB ⇾ 2000 Ks<br/>
            50 GB ⇾ 3000 Ks<br/>
            100 GB ⇾ 5000 Ks<br/>
            <Button 
            as="a"
            href="https://t.me/aquilusnorman"
            variant="warning" 
            style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', marginTop: '1%' }}>ဝယ်ယူမယ်</Button>
            </p>
        </div>
    )
}

export function AskAQ(){
    return(
        <div className="my-banner">
            <p align="left" className="sub-title"><strong>Admin ကို တိုက်ရိုက်မေးချင်ပါသလား</strong></p>
            <p align="left" className="general-text">
            Telegram Group Join ရန် <br/>
            <Button 
            as="a"
            href="https://t.me/joinchat/uAWZTxW-2uVjYjI1"
            variant="warning" 
            style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', marginTop: '1%' }}>Join</Button><br/><br/>
            Admin ကို တိုက်ရိုက်မေးရန်<br/>
            <Button 
            as="a"
            href="https://t.me/aquilusnorman"
            variant="warning" 
            style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', marginTop: '1%' }}>Direct Message</Button>
            </p>
        </div>
    )
}

export const BoycottNews = () =>{
    return(
        <div className="boycott">
            <Marquee
                className="boycott-text"
                style={{ 
                    backgroundColor: '#232833',
                    color: 'white',
                    fontSize: 20,
                }}
                pauseOnHover
                gradient={false}
                >
                    BOYCOTT MLBB and PUBGM&emsp;|&emsp;
                    TWEET TWEET TWEET&emsp;|&emsp;
                    <strong><i>SPRING REVOLUTION</i></strong>&emsp;|&emsp;
            </Marquee>
        </div>
        
    )
}