import React from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';

// Link-Header-Route imports
import { Link } from 'react-router-dom';


function Home() {

    const boxStyles = {
        width: '300px',
        height: '300px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '8px',
        borderColor: '#bbbbbb',
        boxShadow: '2px 2px 7px -3px rgb(120, 120, 120)'
    };
  
    const textStyles = {
        paddingTop: '200px',
        color: '#212450',
        fontSize: '35px',
        fontWeight: 'bold'
    }

    return ( 
        <Flex justifyContent='center'>
          <Flex sx={{
              flexWrap: 'row',
              width: '1000px',
              paddingTop: '10%',
              paddingLeft: '5%',
              paddingRight: '5%',
              bg: '#ffffff',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'}}>

            <Box mx='auto' />
            
            <Link to='/container/Shipper/ShipperLogin' style={{ textDecoration: 'none' }}>
              <Box style={boxStyles}>
                <Text style={textStyles}>Shipper Login</Text>
              </Box>
            </Link>

            <Box minWidth='50px' />

            <Link to='/container/NonProfit/NPLogin' style={{ textDecoration: 'none' }}>
              <Box style={boxStyles}>
                <Text style={textStyles}>Nonprofit Login</Text>
              </Box>
            </Link>

            <Box mx='auto' />

          </Flex>
        </Flex>
    )
};
export default Home;