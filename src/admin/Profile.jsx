import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect} from 'react';
import axios from 'axios';

function Profile (){
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [msgData, setmsgData] = useState(null);
    
    
    useEffect(() => {
        const fetchData = async () => {
        try{
          const result = await fetch('http://127.0.0.1:3002/contacts')
          const data = await result.json();
          setmsgData(data);
          
        }
        catch (error){
          console.error('Error while fetching contacts', error)
        }
      }
        fetchData();
            
    },[]);

    //premet de vérifier les changements de state de msgData a cause de UseEffet
    // useEffect(() => {
    //   console.log(msgData);
    // }, [msgData]);
    
      
   
  
    if (isLoading) {
      return <div className='md:flex-row max-w-[1280px] pl-10 pt-10 mx-auto text-center'>Loading ...</div>;
    }
    


    return (
        isAuthenticated && (
          <div className='flex flex-col md:flex-row max-w-[1280px] p-10 pt-10 mx-auto text-center'>
                <div className='flex flex-col'>
                  <h1 className='text-l font-bold p-1'>Bonjour {user.name}</h1>
                </div>
                <ul>
                  
                    <div className='min-h-[250px] max-w-[1200px] mx-auto rounded border border-slate-400'>
                    <div className='flex divide-x divide-slate-700'>  
                      
                    </div>
                </div>
                  
                </ul>
          </div>
        )
      );
}

export default Profile