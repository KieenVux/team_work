import '../Style/Home.css'
import '../Style/Header.css'

import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, EditOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useStore } from '../context/user';


function newHome() {
    const { Header, Content, Footer } = Layout;

    const userInfos = useStore()

    const navigate = useNavigate();



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
                <Menu.Item>
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
                                        {console.log(userInfos.data)}
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                        {/* <span> {userInfos.data.name} </span> */}
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
                    <h1>HOME </h1>
                    <span>Content</span>
                    <button onClick={() => userInfos.getUsers()}>Click</button>
                    <ul>
                        {(userInfos.data !== null) && userInfos.data.map((user, index) => <li key={index}>{user.name}</li>)}
                    </ul>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default newHome
