import React from 'react'

import { NextPage } from 'next'

import { Box, Button, Flex, Heading, Link } from '@chakra-ui/core'

const ThanksPage: NextPage = props => {
  return (
    <Box>
      <Heading size='lg' textAlign='center'>
        ขอบคุณที่สมัครเข้าร่วมค่าย Young Creator's Camp ค่ะ! 💖
      </Heading>
      <Heading size='lg' textAlign='center'>
        ประกาศผลรับสมัครวันที่ 7 มีนาคม 2563 เวลา 21.00 น.
      </Heading>
      <Flex justifyContent='center' pt={6}>
        <Link href='https://ycc.in.th' _hover={{ textDecoration: 'none' }}>
          <Button>กลับสู่เว็บไซต์หลัก</Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default ThanksPage
