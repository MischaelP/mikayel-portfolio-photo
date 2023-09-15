import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const [unreadMessage, setUnreadMessage] = useState(0);
    const [totalMessage, setTotalMessage] = useState(0);
    const { user, isAuthenticated, logout } = useAuth0();
    const navigate = useNavigate();

    //Use effect pour vérifier la connection de l'utilisateur

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            // Appels API pour obtenir les données
            axios.get('http://127.0.0.1:3002/contacts-unread')
                .then(response => {
                    setUnreadMessage(response.data.nbUnreadMessagesCount);
                })
                .catch(error => {
                    console.log("Unable to fetch number of unread messages", error);
                });

            axios.get('http://127.0.0.1:3002/contacts-count')
                .then(response => {
                    setTotalMessage(response.data.messageCount);
                })
                .catch(error => {
                    console.log("Unable to fetch the sum of messages", error);
                });
        }
    }, [isAuthenticated, navigate]);

    return (
        isAuthenticated ? (
            <>
                <div className='flex flex-cols md:flex-row max-w-[1280px] pt-10 mx-auto text-center'>
                    <div>
                        <h1 className='text-xl text-center '>
                            <p>Bonjour {user?.name}</p>
                        </h1>
                    </div>
                    <div className="text-center">
                        <p>rectangle affichage nb message non lu : {unreadMessage} </p><br/>
                        <p>rectangle affichage message total : {totalMessage}</p>
                    </div>
                </div>
                <button
                    onClick={() => {
                        logout();
                        navigate('/'); // Redirige après la déconnexion
                    }}
                >
                    Se déconnecter
                </button>
            </>
        ) : null
    )
}
   
export default Dashboard