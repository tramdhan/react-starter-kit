import React, { Component } from "react";
import { render } from 'react-dom';
import Main from "./components/ui/main";
import Head from "./components/ui/header";

import 'antd/dist/antd.less';  // Ant Design UI - for future updates, see readme.MD
import './styles/style.scss'; // All custom styles

class App extends Component {
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
            <div>
                <Head/>
                <Main collapsed={this.state.collapsed}/>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));