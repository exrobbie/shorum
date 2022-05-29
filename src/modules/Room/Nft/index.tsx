import React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import ModuleContainer from 'components/ModuleContainer';

import './style.less';

import store from './store';

const Nft = observer(function ({ onClose }: { onClose: () => void }) {
    const { data, onwer, avatarUrl, isBuyVisible } = store;

    return (
        <ModuleContainer className="nft-page common-container">
            <div className="nft-container">
                <Button type="link" className="btn-back" icon={<CaretLeftOutlined />} onClick={onClose}>
                    Back
                </Button>
                <If condition={isBuyVisible}>
                    <Button className="btn-buy" size="large" type="primary" onClick={store.onBuy}>
                        Buy
                    </Button>
                </If>
                <div className="nft-container-box">
                    <div className="nft-image">
                        <div className="nft-image-container">
                            <img src={data?.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="nft-content">
                        <div className="nft-title">{data?.name}</div>
                        <div className="nft-owner">
                            <div className="owner-avatar" style={{ backgroundImage: `url(${avatarUrl})` }} />
                            <div className="owner-info">
                                <div className="owner-title">Owner</div>
                                <div className="owner-name">{onwer?.name}</div>
                            </div>
                        </div>
                        <div className="nft-description">{data?.description}</div>
                    </div>
                </div>
            </div>
        </ModuleContainer>
    );
});

export default Nft;
