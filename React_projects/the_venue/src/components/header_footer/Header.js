import React, {Component, component} from 'react';

import AppBar from '@material_ui/core/AppBar';
import Toolbar from '@material_ui/core/Toolbar';
import MenuIcon from '@material_ui/icons/Menu';
import IconButton from '@material_ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component{

    state = {
        draweOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll, this.handleScroll');
    }


    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
        }else{
            this.setState({
                headerShow: false
            })
        }
    }


    toggleDrawer = (value) => {
        this.setState({
            draweOpen: value
        })
    }

    render(){
        return(
            <AppBar
                position='fixed'
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
                >
                <Toolbar>

                    <div className='header_logo'>
                        <div className='font_righteous header_logo_venue'>Yankees stadium</div>
                        <div className='header_logo_title'>Opening Day</div>
                    </div>

                    <IconButton
                        aria-label='menu'
                        color='inherit'
                        onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.state.draweOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                    />


                </Toolbar>
            </AppBar>
        );
    }
}

export default Header
