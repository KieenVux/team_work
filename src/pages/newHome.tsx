import '../Style/Home.css'
import '../Style/Header.css'

import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Dropdown } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserOutlined, EditOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useStore } from '../context/user';


function newHome() {
    const { Header, Content, Footer } = Layout;

    const userInfos = useStore()

    const navigate = useNavigate();

    const handleLogout = () => {
        userInfos.logOut()
        navigate("/")
    }

    const menu = (
        <Menu >
            <div className="dropdown-menu-user">
                <Menu.Item>
                    <span><EditOutlined /> Edit profile</span>
                </Menu.Item >
                <Menu.Item>
                    <span><SettingOutlined /> Settings</span>
                </Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Item onClick={() => handleLogout()}>
                    <span><LogoutOutlined /> LogOut</span>
                </Menu.Item>
            </div>
        </Menu>
    );

    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col span={6} >
                        <div className="logo" />
                    </Col>
                    <Col span={18} >
                        <Menu style={{ display: 'flex', flexDirection: 'row-reverse' }} theme="dark" mode="horizontal">
                            {userInfos.isAuthenticated === true ?

                                <Dropdown overlay={menu} placement="bottomLeft">
                                    <Menu.Item key={1}>

                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                        <span> {userInfos.fetchApiData.data.name} </span>
                                    </Menu.Item>
                                </Dropdown> :
                                <Menu.Item
                                    onClick={() => navigate("/userAction")}
                                    key={2}> <span>Sign In</span>
                                </Menu.Item>}
                        </Menu>
                    </Col>
                </Row>

            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">

                    <Outlet/>
                    
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default newHome
