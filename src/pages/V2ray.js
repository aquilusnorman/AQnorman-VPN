import React from 'react';
import './main.css';
import { Table } from 'react-bootstrap';
import firebase from '../firebase';
import copy from 'copy-to-clipboard';
import { HashLoader } from 'react-spinners';
import { AskAQ, BuyOutlineBanner } from './AQbanner';
import MiddleNav from './MiddleNav';

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

const V2raySites = {
    FreeV2ray: 'https://view.freev2ray.org/',
    FastSSH: 'https://www.fastssh.com/page/v2ray-servers',
    SSHOcean: 'https://sshocean.com/v2ray/',
    OpenTunnel: 'https://opentunnel.net/',
    CiscoSSH: 'https://ciscossh.com/v2ray',
    VpnHACK: 'https://vpnhack.com/',
    VpsTunnel: 'https://vpnstunnel.com/tunnel/v2ray'
}


class V2ray extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            vmessKeys: {},
            vlessKeys: {},
            isLoading: true
        }
    }

    componentDidMount(){
        firebase.database().ref("/V2ray/Vmess").on("value", snapshot => {
            this.setState({ vmessKeys: snapshot.val() });
        });
        firebase.database().ref("/V2ray/Vless").on("value", snapshot => {
            this.setState({ vlessKeys: snapshot.val() });
            this.setState({ isLoading: false });
        });
    }
    
    render(){

        const vmessKeys = this.state.vmessKeys;
        const vlessKeys = this.state.vlessKeys;

        const override = `
            display: block;
            margin: auto;
        `;

        return(
            <div className="root">
                <MiddleNav/>
                <HashLoader className="spinner" color="white" loading={this.state.isLoading} size={100} css={override} />
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
                    <p align="left" className="sub-title"><strong>Vmess Keys</strong></p>
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
                    <p align="left" className="sub-title"><strong>Vless Keys</strong></p>
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
                    <p align="left" className="sub-title"><strong>V2ray Key တွေကို ဘယ်လိုအသုံးပြုမလဲ</strong></p>
                    <p align="left" className="general-text">
                        V2ray Key တွေကို V2ray support ပေးတဲ့ App တိုင်းမှာ အသုံးပြုနိုင်ပါတယ်။ အသုံးပြုနိုင်တဲ့ App တွေကတော့ ⇀ <br/><br/>
                        <b><i>Android</i></b>
                        <ul>
                            {Object.entries(v2rayApps).map(([key, val], i) => (
                                <li>{key} ⇀ <a style={{ color: '#fdc912'}} href={val}>Download</a></li>
                            ))}
                        </ul>
                        <b><i>IOS</i></b>
                        <ul>
                            {Object.entries(v2rayApps_ios).map(([key, val], i) => (
                                <li>{key} ⇀ <a style={{ color: '#fdc912'}} href={val}>Download</a></li>
                            ))}
                        </ul>
                        <b><strong>STEP 1</strong></b><br/>
                        Key ကို Copy ကူးယူပါ။<br/><br/>
                        <b><strong>STEP 2</strong></b><br/>
                        အထက်မှာပြထားတဲ့ Application တွေထဲက ကိုယ်သုံးချင်တဲ့ App ထဲဝင်ပြီး Import from Clipboard နဲ့ ကူးထည့်ပါ။<br/><br/>
                        <b><strong>STEP 3</strong></b><br/>
                        ကူးထည့်ထားတဲ့ Vmess or Vless ကိုရွေးပြီး Start နှိပ်ပါ။ Data Transfer စတက်ပါက အသုံးပြုလိုရပါပြီ။<br/><br/>
                    </p>
                </div>
                <AskAQ/>
                <hr/>
                <div className="buyV2ray">
                    <p align="left" className="sub-title"><strong>Free V2ray Vmess နဲ့ Vless တွေဘယ်လိုထုတ်မလဲ ?</strong></p>
                    <p align="left" className="general-text">
                    ရက်အကန့်အသတ် Connection အကန့်အသတ်နဲ့ ကိုယ်ပိုင်သုံး သီးသန့် V2ray vmess နဲ့ vless 
                    ထုတ်ဖိုအတွက် Website တွေ အများကြီးရှိပါတယ်။ အောက်မှာပြထားတဲ့ Site တွေမှာ သင်တိုကိုယ်တိုင် ထုတ်လိုရမှာပါ။<br/>
                    <ul>
                        {Object.entries(V2raySites).map(([key, val], i) => (
                            <li>{key} ⇀ <a style={{ color: '#fdc912'}} href={val}>Go To {key}</a></li>
                        ))}
                    </ul>
                    </p>
                    <hr/>
                    <p align="left" className="sub-title"><strong>Opentunnel ကနေ V2ray Vless ထုတ်ယူနည်း</strong></p>
                    <div className="video">
                        <iframe className="responsive-iframe" 
                        src="https://www.youtube.com/embed/o52MIikEm0Q" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                        allowfullscreen></iframe>
                    </div>
                    <hr/>
                    <p align="left" className="sub-title"><strong>FastSSH ကနေ V2ray Vmess ထုတ်ယူနည်း</strong></p>
                    <div className="video">
                    <iframe  className="responsive-iframe"
                    src="https://www.youtube.com/embed/4wsYm4n1GzI" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                    allowfullscreen></iframe>
                    </div>
                    <BuyOutlineBanner/>
                </div>
            </div>
        )
    }
}


export default V2ray;