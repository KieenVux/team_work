import { useNavigate } from 'react-router-dom'
import { Layout, PageHeader, Tabs } from 'antd';
import { UserOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons';

import NewSignUp from "../components/newSignUp";
import NewLoginForm from '../components/newLogin';

import '../Style/userActions.css'
import SkeletonLogin from '../skeleton/skeletonLogin';
import { useStore } from '../context/user';

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
    
    let tabIndex = '1'
    const switchTab = (index: string) => {
        if(index === '1')
            tabIndex === '2'
        else
            tabIndex === '1'
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
                            <Tabs size="large" defaultActiveKey={tabIndex} >
                                <TabPane tab={tabLogin} key="1">
                                    <div className="site-layout-content">
                                        {!data.isAuthenticated ? <NewLoginForm /> : <SkeletonLogin />}
                                    </div>
                                </TabPane>

                                <TabPane tab={tabRegister} key="2">
                                    <div className="site-layout-content">
                                        <NewSignUp />
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
