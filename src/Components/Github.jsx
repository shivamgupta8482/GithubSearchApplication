import { useEffect } from "react";
import { useState } from "react"
import fetchUsers from "./fetchUsers";

import SimpleCard from "./SimpleCard";
import { SearchGIF } from "./AddGif";
//import Feature from "./ChakraCard.jsx";
import axios from "axios";
import {Box, Input, Wrap, WrapItem} from "@chakra-ui/react"
import { Center,Button,SimpleGrid } from "@chakra-ui/react";


 const Github=()=>{
    const [query,setQuery]=useState("");
     const [isError,setIsError] = useState(false);
     const [isLoading,setIsLoading]=useState(true);
    const [users,setUsers] = useState([]);
    const [repos,setRepos]=useState([]);

    useEffect(()=>{
        document.title="Github Search Application"
    })

useEffect(()=>{
     setIsLoading(true);
     setIsError(false);
    fetchUsers("")
    .then((res)=>{
        setUsers(res.data.items);
        setIsLoading(false);
    })
    .catch((err)=>{
        setIsError(true);
    })
    
},[]);

const handleSearch=()=>{
    setIsLoading(true);
    setIsError(false);
    fetchUsers(query)
    .then((res)=>{
        setUsers(res.data.items);
        setIsLoading(false);
    })
    .catch((err)=>{
        setIsError(true);
    })
  
}
const handleShow= async (item)=>{
    try {
        const {data: response} = await axios.get(item.repos_url);
        setRepos(response);
      } catch (error) {
        console.error(error.message);
      }
     
    
}

return(
    <div >
    <Center>
    <h1>Github</h1>
    </Center>
   <Center>
   <div>
        <Input type="text"
        size='md'
        htmlSize={19} width='auto'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="search"
        />
        {console.log(users)}
        <Button mt="-5px" colorScheme='red' onClick={handleSearch}>
            
             Search
        </Button>
    </div>
   
   </Center>
  

 
  <SimpleGrid minChildWidth='180px'  spacing='100px' width="80%" style={{margin:"auto"}}>
   
   {
      isLoading || isError || users.length==0 ? <Center><div><SearchGIF  /></div></Center>
      :users?.map((item)=>(
        <Wrap spacing='30px'>
        <WrapItem>
       
          <Box  key={item.id}  onClick={()=>handleShow(item)}>
         
        
         { <SimpleCard 
         
         img={item.avatar_url}
         name={item.login}
         repos={repos}
         handleShow={handleShow}
         />}
         </Box> 
      
        
         </WrapItem>
         </Wrap>
               
          
       ))
   }
</SimpleGrid>
 
  <Center>
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
  </Center>

    </div>
)

}

export {Github}

