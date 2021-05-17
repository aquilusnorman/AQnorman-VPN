import React from 'react';
import './main.css';
import { Table } from 'react-bootstrap';
import { BuyOutlineBanner } from './AQbanner';
import firebase from '../firebase';

import step1 from '../img/shadowsocks/step1.png';
import step2 from '../img/shadowsocks/step2.png';
import step3 from '../img/shadowsocks/step3.png';

const app_links = {
    outline: 'https://play.google.com/store/apps/details?id=org.outline.android.client&hl=en&gl=us',
    shadowsocks: 'https://play.google.com/store/apps/details?id=com.github.shadowsocks&hl=en&gl=us',
    napsternetv: 'https://play.google.com/store/apps/details?id=com.napsternetlabs.napsternetv&hl=en&gl=us',
    outline_ios: 'https://apps.apple.com/us/app/outline-app/id1356177741',
    fairVPN_ios: 'https://apps.apple.com/us/app/fair-vpn/id1533873488'
}

class ShadowSocks extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            freeKeyList: []
        }
    }

    componentDidMount(){
        firebase.database().ref("/ShadowSocks").on("value", snapshot => {
            let list = [];
            snapshot.forEach(snap => {
                console.log(snap.val());
                list.push(snap.val());
            });
            this.setState({ freeKeyList: list });
        });
    }

    render(){
        return(
            <div className="root">
                <div className="title">ShadowSocks</div>
                <hr width="300px" style={{ margin: 'auto', marginBottom: '1%' }}/>
                <div className="description">
                    <p align="center" className="general-text">
                    ShadowsSocks ဟာ SOCKS proxy အပေါ်အခြေခံထားတဲ့ Protocol တစ်ခုဖြစ်ပြီး 
                    သူ့ရဲ့ Encryption ကလည်း တကယ်ကောင်းပါတယ်။ လွယ်လွယ်ပြောရရင်အခု လူတွေအသုံးများနေတဲ့ Outline ပါ။ 
                    Outline ဟာ ShadowSocks ကို အသုံးပြုတဲ့ VPN ဖြစ်ပါတယ်။ Outline ရဲ့ Key တွေအရှေ့မှာ ss:// ဆိုတာလေးကို သတိထားမိကြမှာပါ။ 
                    အဲ့တာက ShadowSocks protocol ကို ကိုယ်စားပြုထားတာပဲဖြစ်ပါတယ်။<br/>
                    အခုအောက်က Key တွေက ကျွန်တော့် Server က ထုတ်ထားတဲ့ Free Key 4 ခုပဲဖြစ်ပါတယ်။ 
                    ကျွန်တော့် VPN Donation ကာလကို ဒီလကုန်ရင် နားမှာမို့လို့ နောက်လဆန်းကျရင်တော့ Private Key တွေကို 
                    ကျွန်တော့် Telegram ကနေ တိုက်ရိုက်လာဝယ်လို့ရပါတယ်။
                    </p>
                </div>
                <hr/>
                <div className="files">
                <p align="left"><strong>ShadowSocks Keys</strong></p>
                <p align="left" className="general-text">Valid until the end of this month</p>
                <Table bordered responsive variant="dark" cellPadding={10}>
                            <thead>
                                <th width={200}>No</th>
                                <th width={800}>Key</th>
                            </thead>
                            <tbody>
                                {this.state.freeKeyList.map((item, n) => (
                                    <tr>
                                    <td>Free Key {n+1}</td>
                                    <td style={{ wordBreak: 'break-all' }}>{item}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                </div>
                <hr/>
                <div className="usage">
                <p align="left"><strong>ShadowSocks Key အသုံးပြုပုံ</strong></p>
                <p align="left" className="general-text">
                    ShadowSocks Protocol ကို support ပေးတဲ့ Application တိုင်းမှာ အသုံးပြုလို့ရပါတယ်။ 
                    အထူးသဖြင့် Outline, ShadowSocks နဲ့ NapsternetV တို့မှာပေါ့။ အခြား App တွေလည်းအများကြီးရှိသလို 
                    သုံးလို့အဆင်ပြေဆုံးဟာလေးတွေ ရွေးပေးထားတာပါ။<br/><br/>
                    <b><i>Android</i></b><br/>
                    Outline ⇀ <a style={{ color: '#fdc912'}} href={app_links.outline}>Download Outline</a><br/>
                    ShadowSocks ⇀ <a style={{ color: '#fdc912'}} href={app_links.shadowsocks}>Download ShadowSocks</a><br/>
                    NapsternetV ⇀ <a style={{ color: '#fdc912'}} href={app_links.napsternetv}>Download NapsternetV</a><br/><br/>
                    <b><i>IOS</i></b><br/>
                    Outline ⇀ <a style={{ color: '#fdc912'}} href={app_links.outline_ios}>Download Outline</a><br/>
                    FairVPN ⇀ <a style={{ color: '#fdc912'}} href={app_links.fairVPN_ios}>Download FairVPN</a><br/><br/>
    
                    <strong><u>STEP 1</u></strong>
                    <br/>
                    Key ကို copy ယူပါ။ ShadowSocks App ထဲသို့သွားပါ။<br/>
                    <img className="steps" src={step1} alt="step1"/>
                    <br/><br/>
    
                    <strong><u>STEP 2</u></strong>
                    <br/>
                    ပုံထဲမှာပြထားတဲ့အတိုင်း Import from Clipboard နဲ့ ကူးထည့်ပါ။<br/>
                    <img className="steps" src={step2} alt="step2"/>
                    <br/><br/>
    
                    <strong><u>STEP 3</u></strong>
                    <br/>
                    အောက်က Start Button လေးကို နှိပ်ပြီး Data Transfer စတက်တာနဲ့ အသုံးပြုလို့ရပါပြီ။<br/>
                    <img className="steps" src={step3} alt="step3"/>
                    <br/>
                    အားလုံး အဆင်ပြေပါစေ💪
                </p>
                </div>
                <BuyOutlineBanner/>
            </div>
        )
    }
}


export default ShadowSocks;