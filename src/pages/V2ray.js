import React from 'react';
import './main.css';
import { Table } from 'react-bootstrap';
import firebase from '../firebase';
import copy from 'copy-to-clipboard';

const v2rayApps = {
    V2rayNG: 'https://play.google.com/store/apps/details?id=com.v2ray.ang&hl=en&gl=US',
    Napsternetv: 'https://play.google.com/store/apps/details?id=com.napsternetlabs.napsternetv&hl=en&gl=us',
    Kitsunebi: 'https://play.google.com/store/apps/details?id=fun.kitsunebi.kitsunebi4android&hl=en&gl=US',
    HTTP_Injector: 'https://play.google.com/store/apps/details?id=com.evozi.injector&hl=en&gl=US',
    ShadowRocket: 'https://play.google.com/store/apps/details?id=com.github.shadowrocket&hl=en_US&gl=US'
}

const v2rayApps_ios = {
    FairVPN: 'https://apps.apple.com/us/app/fair-vpn/id1533873488',
    Kitsunebi: 'https://apps.apple.com/us/app/kitsunebi-proxy-utility/id1446584073',
    ShadowRocket: 'https://apps.apple.com/us/app/shadowrocket/id932747118'
}


class V2ray extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            vmessKeys: {},
            vlessKeys: {},
            copyText: ''
        }
    }

    componentDidMount(){
        firebase.database().ref("/V2ray/Vmess").on("value", snapshot => {
            this.setState({ vmessKeys: snapshot.val() });
        });
        firebase.database().ref("/V2ray/Vless").on("value", snapshot => {
            this.setState({ vlessKeys: snapshot.val() });
        });
    }
    
    render(){

        const vmessKeys = this.state.vmessKeys;
        const vlessKeys = this.state.vlessKeys;

        return(
            <div className="root">
                <div className="title">V2ray</div>
                <hr width="300px" style={{ margin: 'auto', marginBottom: '1%' }}/>
                <div className="description">
                    <p align="center" className="general-text">
                    V2ray က Project V ရဲ့ တစိတ်တပိုင်းတစ်ခုဖြစ်ပြီးတော့ ShadowSocks နဲ့ အပြိုင်ထုတ်ထားတဲ့ Vmess Protocol ဖြစ်ပါတယ်။ 
                    Vmess Protocol ရဲ့ detection prevention system ဟာ ShadowSocks ထက်ပိုကောင်းပြီး port တွေက အစ Dynamically 
                    ပြောင်းလိုရပါတယ်။ V2ray အောက်မှာပဲ တခြား protocol တွေရှိပါသေးတယ်။<br/>
                    Vless protocol ဟာလည်း V2ray ရဲ့ Lightweight protocol တစ်ခုပါပဲ ဒါပေမယ့် vless 
                    တစ်ခုတည်းပဲဆိုရင်တော့ Encryption မရှိတဲ့အတွက် TLS နဲ့ Websocket တိုနဲ့ တွဲသုံး‌မယ်ဆိုရင်တော့ အဆင်ပြေပါတယ်။<br/>
                    အောက်က V2ray vmess နဲ့ vless url တွေက ကျွန်တော့် V2ray Server တွေက ထုတ်ထားတဲ့ဟာတွေပါ။ လမကုန်ခင်ထိ ဖွင့်ပေးထားမှာပါ။
                    </p>
                </div>
                <div className="files">
                    <p align="left"><strong>Vmess Keys</strong></p>
                    <p align="left" className="general-text">Valid until the end of this month</p>
                    <Table bordered responsive variant="dark" cellPadding={10}>
                            <thead>
                                <th>Server</th>
                                <th>URL</th>
                            </thead>
                            <tbody>
                                {Object.entries(vmessKeys).map(([key, val], i) => (
                                    <tr>
                                        <td>{key}</td>
                                        <td style={{ wordBreak: 'break-all' }}>{val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                </div>
                <hr/>
                <div className="files">
                    <p align="left"><strong>Vless Keys</strong></p>
                    <p align="left" className="general-text">Valid until the end of this month</p>
                    <Table bordered responsive variant="dark" cellPadding={10}>
                            <thead>
                                <th>Server</th>
                                <th>URL</th>
                            </thead>
                            <tbody>
                                {Object.entries(vlessKeys).map(([key, val], i) => (
                                    <tr>
                                        <td>{key}</td>
                                        <td style={{ wordBreak: 'break-all' }}>
                                                {val}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                </div>
                <hr/>
                <div className="usage">
                    <p align="left"><strong>V2ray Key တွေကို ဘယ်လိုအသုံးပြုမလဲ</strong></p>
                    <p align="left" className="general-text">
                        V2ray Key တွေကို V2ray support ပေးတဲ့ App တိုင်းမှာ အသုံးပြုနိုင်ပါတယ်။ အသုံးပြုနိုင်တဲ့ App တွေကတော့ ⇀ <br/><br/>
                        <b><i>Android</i></b>
                        <ul>
                            {Object.entries(v2rayApps).map(([key, val], i) => (
                                <li>{key} ⇀ <a style={{ color: '#fdc912'}} href={val}>Download {key}</a></li>
                            ))}
                        </ul>
                        <b><i>IOS</i></b>
                        <ul>
                            {Object.entries(v2rayApps_ios).map(([key, val], i) => (
                                <li>{key} ⇀ <a style={{ color: '#fdc912'}} href={val}>Download {key}</a></li>
                            ))}
                        </ul>
                    </p>
                </div>
    
            </div>
        )
    }
}


export default V2ray;