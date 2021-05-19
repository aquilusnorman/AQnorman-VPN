import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './main.css';
import { BuyOutlineBanner } from './AQbanner';

import step1 from '../img/wireguard/step1.png';
import step2 from '../img/wireguard/step2.png';
import step3 from '../img/wireguard/step3.png';
import step4 from '../img/wireguard/step4.png';
import MiddleNav from './MiddleNav';

const wireguard_package_list = [
    {
        name: 'AQnorman Wireguard 1-10 Package',
        link: 'https://mega.nz/file/fqgmTRRT#ty4QNjwQGVzrjKLJhCoo7GDSt2cbwwVItM2DFNo0quE'
    },
    {
        name: 'AQnorman Wireguard 11-20 Package',
        link: 'https://mega.nz/file/P2wxRCQT#yehxOww6o_u3PfF0pM-3fbwY3bHL-tE41d_yvh2OKTQ'
    }
]

const wireguard_playstore = "https://play.google.com/store/apps/details?id=com.wireguard.android&hl=en_US&gl=US"
const wireguard_appstore = "https://apps.apple.com/us/app/wireguard/id1441195209"

function Wireguard(){
    return(
        <div className="root">
            <MiddleNav/>
            <div className="title">Wireguard</div>
            <hr width="300px" style={{ margin: 'auto', marginBottom: '1%' }}/>
            <div className="description">
                <p align="center" className="general-text">
                ShadowSocks နဲ့ V2ray တွေသုံးရတာ လိုင်းကျခဲ့ရင် ဒီ Wireguard လေးကို သုံးစေချင်ပါတယ်ခင်ဗျာ။
                တစ်ခုမဟုတ်တစ်ခုနဲ့ လိုင်းရအောင်လို့ပါ။
                ဒီ Wireguard ဟာ WARP နဲ့ ချိတ်ဆက်ထားတာဖြစ်တဲ့အတွက် Server တိုင်းဟာ Cloudflare WARP ကိုသာချိတ်‌‌နေမှာဖြစ်ပါတယ်။
                </p>
            </div>
            <hr/>
            <div className="files">
            <p align="left"><strong>Wireguard Files</strong></p>
                <Table bordered responsive variant="dark" cellPadding={10}>
                    <thead>
                        <th width={1000}>File</th>
                        <th>Download</th>
                    </thead>
                    <tbody>
                        {wireguard_package_list.map((item) => (
                            <tr>
                            <td style={{ fontSize: '20px' }}>{item.name}</td>
                                <td>
                                    <Button as="a"
                                        href={item.link}
                                        className="downloadBtn" 
                                        variant="warning" 
                                        style={{color: 'black'}}>Download</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <hr/>
            <div className="byname">
                <p align="left"><strong>ကိုယ့်နာမည်နဲ့ Wireguard File ထုတ်ချင်ပါလား</strong></p>
                <p align="left" className="general-text">
                    ကိုယ့်နာမည်နဲ့ Wireguard File လိုချင်ပါက Telegram မှာ တိုက်ရိုက်လာပြောပေးပါ အခကြေးငွေမယူပဲပေးပါမယ်။
                    <br/>
                    <Button as="a" href="https://t.me/aquilusnorman" 
                    className="downloadBtn" 
                    variant="warning">Direct Message</Button>
                </p>
            </div>
            <hr/>
            <div className="usage">
                <p align="left"><strong>Wireguard အသုံးပြုပုံ</strong></p>
                <p align="left" className="general-text">
                    Wireguard မရှိသေးပါက Play Store ကနေ download ချပေးပါ။ IOS ဆိုရင် App Store မှာရှိပါတယ်။<br/>
                    Playstore&emsp;⇀ <a style={{ color: '#fdc912'}} href={wireguard_playstore}>Download Wireguard for Android</a><br/>
                    IOS &emsp;&emsp;&emsp; ⇀ <a style={{ color: '#fdc912'}} href={wireguard_appstore}>Download Wireguard for IOS</a>
                    <br/><br/>
                    <strong><u>STEP 1</u></strong>
                    <br/>
                    Package ကို download ချပါ။ Zip File အဖြစ်ထွက်လာပါလိမ့်မယ်။
                    <br/><br/>
                    <strong><u>STEP 2</u></strong>
                    <br/>
                    Wireguard Application ထဲသို့ဝင်ပါ။ ပုံပါအတိုင်း အပြာရောင် + လေးကို နှိပ်ပါ။<br/>
                    <img className="steps" src={step1} alt="step1"/>
                    <br/><br/>
                    <strong><u>STEP 3</u></strong>
                    <br/>
                    ပုံပါအတိုင်း Import from File or Archive ကိုနှိပ်ပါ။ .zip file Download ချထားတဲ့ နေရာကိုသွားပြီး ရွေးပေးပါ။<br/>
                    <img className="steps" src={step2} alt="step2"/>
                    <br/><br/>
                    <strong><u>STEP 4</u></strong>
                    <br/>
                    ထည့်ပြီးသွားရင် ပုံထဲမှာ အတိုင်းပေါ်နေပါလိမ့်မယ်။<br/>
                    <img className="steps" src={step3} alt="step3"/>
                    <br/><br/>
                    <strong><u>STEP 5</u></strong>
                    <br/>
                    ကိုယ်သုံးချင်တဲ့ Wireguard config file ကို နှိပ်ပြီးတော့ Switch လေးကို On ပြီးရင် 
                    အောက်ဘက်မှာ Data Transfer စတက်တာနဲ့ အသုံးပြုလို့ရပါပြီ။ <br/>
                    <img className="steps" src={step4} alt="step4"/><br/>
                    အားလုံး အဆင်ပြေပါစေ💪
                </p>
            </div>
            <BuyOutlineBanner/>
            <hr/>
        </div>
    )
}


export default Wireguard;