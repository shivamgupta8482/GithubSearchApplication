import { useEffect } from "react";
import { useState } from "react"
import fetchUsers from "./fetchUsers";
import KitchenSinkExample from "./Card";
import SimpleCard from "./SimpleCard";
import { SearchGIF } from "./AddGif";
//import Feature from "./ChakraCard.jsx";
import axios from "axios";


 const Github=()=>{
    const [query,setQuery]=useState("");
    // const [isError,setIsError] = useState(false);
    // const [isLoading,setIsLoading]=useState(false);
    const [users,setUsers] = useState([]);
    const [repos,setRepos]=useState([]);

    useEffect(()=>{
        document.title="Github Search Application"
    })

useEffect(()=>{
    // setIsLoading(true);
    // setIsError(false);
    fetchUsers("")
    .then((res)=>{
        setUsers(res.data.items);
    })
    .catch((err)=>{
        //setIsError(true);
    })
    .finally(()=>{
        // setIsLoading(false);
    })
},[]);

const handleSearch=()=>{
    //setIsLoading(true);
    //setIsError(false);
    fetchUsers(query)
    .then((res)=>{
        setUsers(res.data.items);
    })
    .catch((err)=>{
        //setIsError(true);
    })
    .finally(()=>{
        //setIsLoading(false);
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
    <>
    <h1>Github</h1>
    <div>
        <input type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="search"
        />
        {console.log(users)}
        <button  onClick={handleSearch}>
            Search
            {/* {isLoading?<SearchGIF />:"Search"} */}
        </button>
    </div>
    {/* {isError?<SearchGIF />:null} */}
  

    <div>
        {
            users?.map((item)=>(
                <div key={item.id}  onClick={()=>handleShow(item)} >
               { <SimpleCard 
              
               img={item.avatar_url}
               name={item.login}
               />}
                    
                </div>
            ))
        }
    </div>
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

    </>
)

}

export {Github}

