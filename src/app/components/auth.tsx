import React, { useEffect, useState } from 'react'

import Router from 'next/router'

import { Button, Flex, Spinner, Text } from '@chakra-ui/core'

import { auth } from 'firebase/app'
import 'firebase/auth'
import { firebase } from '../../core/services/firebase'

import { IAuthProps } from '../@types/IAuthProps'

const AuthComponent: React.FC<IAuthProps> = props => {
  const { user } = props

  const [stage, setStage] = useState<number>(0)

  const [isLoginButtonLoad, setIsLoginButtonLoad] = useState<boolean>(false)

  const loginHandler = () => {
    setIsLoginButtonLoad(true)

    const instance = firebase()
    const provider = new auth.GoogleAuthProvider()

    instance
      .auth()
      .signInWithPopup(provider)
      .catch(e => {
        if (e === 'auth/popup-closed-by-user') {
          // TODO: Handle auth error
        } else {
          // TODO: Handle auth error
        }
      })
      .finally(() => {
        setIsLoginButtonLoad(false)
      })
  }

  useEffect(() => {
    if (user === null) {
      setStage(1)
    } else {
      setStage(2)
    }
  }, [user])

  useEffect(() => {
    Router.push('/')
  }, [])

  return (
    <React.Fragment>
      {stage === 0 ? (
        <Flex flexWrap='wrap' justifyContent='center' py={10}>
          <Spinner size='lg' />
          <Text width='100%' textAlign='center' pt={4}>
            กำลังยืนยันตัวเพื่อเข้าสู่ระบบ...
          </Text>
        </Flex>
      ) : stage === 1 ? (
        <Flex flexWrap='wrap' justifyContent='center' py={10}>
          <Text width='100%' textAlign='center' pb={4}>
            กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ
          </Text>
          <Button
            isLoading={isLoginButtonLoad}
            onClick={loginHandler}
            variantColor='flory'
            willChange='transform'
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
            }}>
            เข้าสู่ระบบด้วย Facebook
          </Button>
        </Flex>
      ) : (
        <Flex flexWrap='wrap' justifyContent='center' py={10}>
          <Spinner />
        </Flex>
      )}
    </React.Fragment>
  )
}

export default AuthComponent
