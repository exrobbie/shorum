import React, { useContext } from 'react';
// import { useWallet } from 'use-wallet';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import ConnectWallet from 'components/ConnectWallet';
import { loggedOut, isLoggedOut } from 'components/ConnectWallet/utils';
import hashHistory from 'hash-history';
import { Web3Context } from '@/context/Web3Context';
import SearchInput from './SearchInput';

import Logo from '../../assets/logo.png';

// import LogoLight from "assets/logo.svg";
import './style.less';

export default function AppHeader() {
    // const wallet = useWallet();
    // const { account } = wallet;
    const { account, resetWallet } = useContext(Web3Context);

    const handleClick = () => {
        hashHistory.push('/room');
    };

    const handleDropdownItemClick = ({ key }: { key: string }) => {
        // wallet.reset();
        resetWallet();
        loggedOut();
        hashHistory.push('/landing');
    };

    return (
        <header className="app-header">
            <Link to="/">
                <img src={Logo} className="logo" alt="" />
            </Link>
            <div className="header-search">
                <SearchInput placeholder="Search..." />
            </div>
            <div className="header-right">
                {account ? (
                    <>
                        <Dropdown
                            overlay={
                                <Menu
                                    items={[
                                        {
                                            key: 'logout',
                                            icon: <LogoutOutlined />,
                                            label: 'Logout',
                                        },
                                    ]}
                                    onClick={handleDropdownItemClick}
                                />
                            }
                            placement="bottomRight">
                            <div className="btn-trans" onClick={handleClick}>
                                {account.slice(0, 4)}...{account.slice(-4)}
                            </div>
                        </Dropdown>
                    </>
                ) : (
                    <ConnectWallet triggerConnect={!isLoggedOut()} />
                )}
            </div>
        </header>
    );
}
