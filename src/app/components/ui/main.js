import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import { Welcome } from '../modules/welcome';
import { Page1 } from '../modules/page1';
import { Page2 } from '../modules/page2';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
          }
    }
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
        <Router>
            <div className="wrapper">
                <nav className="main-nav">
                <div style={{ width: 200 }}>
                    <Button className="main-nav-toggle" onClick={this.toggleCollapsed} style={{ marginBottom: 12 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ fontSize: 26 }} />
                    </Button>
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                    className="main-nav">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span><Link to="/">Home</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="pie-chart" />
                        <span><Link to="/page1">Page 1</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="desktop" />
                        <span><Link to="/page2">Page 2</Link></span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu> */}
                    </Menu>
                </div>
                </nav>
                <article className="content">
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/page2" component={Page2}/>
                </article>
            </div>
        </Router>);
    }
}

export default Main