import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = () => {
  return (
   <Alert status='error'
   position={"fixed"}
   w={"container.lg"}
   left={"50%"}
   transform={"translateX(-50%)"}
   m={"4"}
  
   >
       <AlertIcon/>
Error...404 not found !
 
   </Alert>
     
    
  )
}

export default ErrorComponent
