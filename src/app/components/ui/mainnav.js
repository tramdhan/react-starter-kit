import React, { Component } from "react";
// import { Link } from "react-router";
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

// import { Welcome } from "../modules/welcome";
// import { Page1 } from "../modules/page1";
// import { Page2 } from "../modules/page2";

export default class Mainnav extends Component {
    // export const Mainnav = () => (
// export default class Mainnav extends Component {
    state = {
        collapsed: false,
      }
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render() {
        return (
            // <Router>

    <div className="wrapper">
        <nav className="main-nav">
        <div style={{ width: 200 }}>
        {/* <HashRouter> */}
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
                <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="inbox" />
                <span>Option 3</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
            </Menu>

            {/* <Switch> */}
                        {/* <Route exact path="/" component={App}/> */}
                        {/* <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                    </Switch> */}
            {/* </HashRouter> */}
        </div>
        </nav>

        <article className="content">
            {/* <Route exact path="/" component={Welcome}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/> */}
        </article>
    </div>

    );
    }
        }
