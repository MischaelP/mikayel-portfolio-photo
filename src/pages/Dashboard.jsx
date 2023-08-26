import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [unreadMessage, setUnreadMessage] = useState(0);
    const [totalMessage, setTotalMessage] = useState(0);


    //API call pour le nombre de message
    useEffect(() => {
        axios.get('http://127.0.0.1:3002/contacts-unread')
            .then(response => {
                 setUnreadMessage(response.data.nbUnreadMessagesCount);
            })
            .catch ((error) => {
                console.log("Unable to fech number of unread messages", error);
            })
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:3002/contacts-count')
            .then(response => {
                setTotalMessage(response.data.messageCount);
            })
            .catch ((error) =>  {
                console.log("Unable to fetch the sum of messages", error)
            })
    },[]);

  return (
    <>
    <p>rectangle affichage nb message non lu : {unreadMessage} </p>
    <p>rectangle affichage message total : {totalMessage}</p>
    </>
  )
}

export default Dashboard