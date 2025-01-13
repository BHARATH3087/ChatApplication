import React from 'react';

import { Box, Heading, Center } from '@chakra-ui/react';

function Footer() {
  return (
    <Box padding={8}>
      <Center>
        <Heading size="sm">Powered by Redis and Golang</Heading>
      </Center>
      <Center>
        <Heading fontStyle={'italic'} size="sm" paddingTop={2}>
          Made in India by{' '}
          <a href="https://my-portfolio-iota-tan-29.vercel.app/" rel="noreferrer" target={'_blank'}>
            Bharath Reddy Bayyaram
          </a>
        </Heading>
      </Center>
    </Box>
  );
}

export default Footer;
