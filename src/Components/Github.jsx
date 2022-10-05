import { useEffect } from "react";
import { useState } from "react"
import fetchUsers from "./fetchUsers";

import SimpleCard from "./SimpleCard";
import { SearchGIF } from "./AddGif";
//import Feature from "./ChakraCard.jsx";
import axios from "axios";
import {Avatar, AvatarGroup, Box, Input, Wrap, WrapItem} from "@chakra-ui/react"
import { Center,Button,SimpleGrid } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";


 const Github=()=>{

    const { colorMode, toggleColorMode } = useColorMode()

    const [query,setQuery]=useState("");
     const [isError,setIsError] = useState(false);
     const [isLoading,setIsLoading]=useState(true);
    const [users,setUsers] = useState([]);
    const [repos,setRepos]=useState([]);
      const [followers,setFollowers]=useState([]);
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
        const {data:gettingfollowers} = await axios.get(item.followers_url)
        setRepos(response);
        setFollowers(gettingfollowers);
        console.log(followers)
        //console.log(response)
      } catch (error) {
        console.error(error.message);
      }
     
    
}

return(
    <div >
        <br />
<Center>
<Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
</Center>
<br />


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
        <Button mt="-5px" colorScheme='orange' onClick={handleSearch}>
            
             Search
        </Button>
        <br />
       
    </div>
   
   </Center>
  

 <br />
 <br />
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
         followers={followers}
         url ={item.html_url}
         />}
         </Box> 
      
        
         </WrapItem>
         </Wrap>
               
          
       ))
   }
</SimpleGrid>
 
 

    </div>
)

}

export {Github}

