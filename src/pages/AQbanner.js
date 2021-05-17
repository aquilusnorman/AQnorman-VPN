import React from 'react';
import { Button } from 'react-bootstrap';
import './main.css';

export function BuyOutlineBanner(){
    return(
        <div className="buyOutlineBanner">
            <p align="left"><strong>Outline Private Key ဝယ်ယူလိုပါသလား</strong></p>
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