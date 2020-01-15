import React, { useState } from 'react';

// styling imports
import { Flex, Box, Text } from 'rebass';

// Link-Header-Route imports
import { Link } from 'react-router-dom';

import LoginInfo from '../components/LoginInfo'


function LoginHome(props) {
  const [hasChosen, setHasChosen] = useState('')

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
          { hasChosen ? <LoginInfo hasChosen={hasChosen} /> :
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

            <Box style={boxStyles} onClick={(e)=>setHasChosen('shipper')}>
                <Text style={textStyles}>Shipper Login</Text>
            </Box>

            <Box minWidth='50px' />

            <Box style={boxStyles} onClick={(e)=>setHasChosen('np')}>
                <Text style={textStyles}>Nonprofit Login</Text>
            </Box>

            <Box mx='auto' />

          </Flex>
          }
        </Flex>
    )
};
export default LoginHome;