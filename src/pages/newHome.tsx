import React from 'react'
import '../Style/Home.css'
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import NewLoginForm from '../pages/newLogin';
import { useNavigate } from 'react-router-dom';

function newHome() {
    const { Header, Content, Footer } = Layout;

    const navigate = useNavigate();

    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col span={6} >
                        <div className="logo" />
                    </Col>
                    <Col span={18} >
                        <Menu style={{ display: 'flex', flexDirection: 'row-reverse' }} theme="dark" mode="horizontal">
                            <Menu.Item onClick={() => navigate("/login")} key={1}>{`Login`}</Menu.Item>
                            <Menu.Item key={2}>{`Sign Up`}</Menu.Item>
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
                    <h1>HOME </h1>
                    <span>Content</span>
                    <h1>HOME </h1>
                    <span>Content</span>
                    <h1>HOME </h1>
                    <span>Content</span>
                    <h1>HOME </h1>
                    <span>Content</span>
                    <h1>HOME </h1>
                    <span>Content</span>
                    {/* <NewLoginForm /> */}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default newHome
