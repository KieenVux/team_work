import './Style/App.css'
import { route, route2 } from './route/route.map'
import { useRoutes } from 'react-router-dom'
// import './Style/App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import NewLoginForm from './pages/newLogin';

function App() {
  const { Header, Content, Footer } = Layout;
  // const elements = useRoutes(route)
  return (
    <div className="App">
      {/* <div className="auth-wrapper">
        <div className="auth-inner">
          {elements}
        </div>
      </div> */}

      <Layout className="layout">
        <Header>
          <Row>
            <Col span={6} >
              <div className="logo" />
            </Col>
            <Col span={18} >
              <Menu style={{ display: 'flex', flexDirection: 'row-reverse' }} theme="dark" mode="horizontal">
                <Menu.Item key={1}>{`Login`}</Menu.Item>
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
            <NewLoginForm />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,

    </div>

  )
}
import newHome from './pages/newHome';

export default App
