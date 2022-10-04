import { Box,Image,Center,Button } from "@chakra-ui/react"
import React from "react"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,Heading,SimpleGrid
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"






export default function SimpleCard({img,name,repos,handleShow}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  const btnRef = React.useRef(null)
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

<Button colorScheme="teal" mt={3} ref={btnRef} onClick={onOpen}>
       Extra Information
      </Button>

      <Modal
      size="5xl"
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         <Center>
         <Image  borderRadius='full'
  width="30%"
  
  alt='Dan Abramov' src={img} />
         </Center>

<Center>
<Box minChildWidth='180px'  spacing='100px' width="80%" style={{margin:"auto"}}>
  <br />
  <Center>
    <Heading>All Repos-{repos.length}</Heading>
  </Center>
        {
            repos?.map((item)=>(
               <>
                <br />
             <Box bg='orange' style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",padding:"20px"}}>
             <Heading as='h1' size='md' noOfLines={1}>{item.name}</Heading><br />
              
              <p>{item.description}</p><br />
              {
                item.language==null?"":<Button bg='tomato'>{item.language}</Button>
              }

             </Box>
           <br />
               </>
            ))
        }
    </Box>
</Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>






      {/* <Button onClick={onOpen}>More Details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image  borderRadius='full'
  width="110%"
  
  alt='Dan Abramov' src={img} />

<div>
        {
            repos?.map((item)=>(
               <>
                <li><h3>{item.name}</h3></li>
                <p>{item.description}</p>
                <h5>{item.language}</h5>
           
               </>
            ))
        }
    </div>



          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} >
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
</Center>
      
   </Box>


   
  </Box>
    )
}