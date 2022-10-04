import { Box,Image,Center,Button } from "@chakra-ui/react"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"






export default function SimpleCard({img,name,repos,handleShow}){
  const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Box style={{borderRadius:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>

   
    
   <Box style={{padding:"20px"}}>
   <Center>
     <Image  borderRadius='full'
  width="110%"
  
  alt='Dan Abramov' src={img} />

     </Center>
      <br />
      <Center>
      <h1>{name}</h1>
      </Center>
<Center>
  <br />
<>
      <Button onClick={onOpen}>More Details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image  borderRadius='full'
  width="110%"
  
  alt='Dan Abramov' src={img} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} >
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
</Center>
      
   </Box>


   
  </Box>
    )
}