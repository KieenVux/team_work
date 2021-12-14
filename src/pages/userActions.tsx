import { useNavigate } from 'react-router-dom'
import { Layout, PageHeader, Tabs } from 'antd';
import { UserOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons';

import NewSignUp from "../components/newSignUp";
import NewLoginForm from '../components/newLogin';

import '../Style/userActions.css'
import SkeletonLogin from '../skeleton/skeletonLogin';
import { useStore } from '../context/user';
import { useState } from 'react';

function userActions() {
    const { Content, Footer } = Layout;
    const { TabPane } = Tabs;
    const data = useStore()

    const navigate = useNavigate()

    const tabRegister = (
        <span>
            <UserOutlined />
            User Registration
        </span>
    )
    const tabLogin = (
        <span>
            <LoginOutlined />
            Login
        </span>
    )
    const [tab, setTab] = useState('1')

    const switchTab = (key: string) => {
        setTab(key)
    }   

    return (
        <div>
            <Layout style={{ height: '100%' }} className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => navigate("/")}
                        title="Home"
                        subTitle="This is a subtitle"
                        footer={
                            <Tabs activeKey={tab} onChange={switchTab} size="large" defaultActiveKey={tab} >
                                <TabPane tab={tabLogin} key='1'>
                                    <div className="site-layout-content">
                                        {!data.isAuthenticated ? <NewLoginForm switchTab={switchTab} /> : <SkeletonLogin />}
                                    </div>
                                </TabPane>

                                <TabPane tab={tabRegister} key='2'>
                                    <div className="site-layout-content">
                                        <NewSignUp switchTab={switchTab} />
                                    </div>
                                </TabPane>
                            </Tabs>
                        }
                    />

                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default userActions
