import React from 'react'
import { Button } from 'react-bootstrap'
import './main.css';

class MiddleNav extends React.Component{
    render(){

        const navs = {
            HOME: '/',
            SHADOWSOCKS: '/shadowsocks',
            WIREGUARD: '/wireguard',
            V2RAY: '/v2ray'
        }

        return(
            <>
            <div className="middleNav">
                {Object.entries(navs).map(([key, val]) => (
                    <Button className="middleNav-btn" as="a" href={val}
                    style={{
                        fontSize: 20,
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        backgroundColor: 'transparent',
                    }}
                    >
                        {key}
                    </Button>
                ))}
            </div>
            </>
        )
    }
}

export default MiddleNav;