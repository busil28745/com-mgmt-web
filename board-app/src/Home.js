import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
      return (
        <Nav>
            <NavList>
             <NavItem><Link to='/board'> 기업 </Link></NavItem>
             <NavItem><Link to='/student'> 학생 </Link></NavItem>
             </NavList>
        </Nav>
        
      );
    }
  }
  
export default Home;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: 60px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`