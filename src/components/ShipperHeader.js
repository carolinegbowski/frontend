import React from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';

// Link-Header-Route
import { Link } from 'react-router-dom';


function ShipperHeader(props) {

  const headerLinkStyles = {
    marginTop: '10px',
    padding: '4px 4px',
    background: '#eef0ff',
    color: 'rgb(33,60,71)',
    fontFamily: 'Work Sans',
    fontSize: '15px',
    fontWeight: 'bold',
    borderWidth: '0px',
    borderRadius: '3px',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  }

  function logout() {
    sessionStorage.setItem('id', '')
    sessionStorage.setItem('user_type', "logout")
    props.setID('')
  }

  return (
    <nav>
      <Flex>
        <Link to='/shipper/previousroutes' style={headerLinkStyles}>
          Previous Routes</Link>

        <Box width='20px' />

        <Link to='/shipper/newroute' style={headerLinkStyles}>
          New Route</Link>

        <Box width='20px' />

        <Link to='/shipper/openroutes' style={headerLinkStyles}>
          Open Routes</Link>

        <Box width='20px' />

        <Link to='' onClick={(e)=>logout()} style={headerLinkStyles}>
          Logout</Link>

      </Flex>
    </nav>
  )
};
export default ShipperHeader;