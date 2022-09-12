import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElement'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to='/main'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>

    )
}

export default Sidebar