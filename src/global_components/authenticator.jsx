import React from "react";
import { useState, useContext, useEffect } from "react";

export const userContext = React.createContext();

const data = [{ 
    userID: "AUT545",
    name: "John Doe",
    email: "example@ecgxyggc.com",
},
{ 
    userID: "AUTH767",
    name: "Jack Doe",
    email: "exampdewle@ecgxyggc.com",
} ,
{ 
    userID: "AUT6756",
    name: "Johefwfvn Doe",
    email: "exampldewe@ecgxyggc.com",
} ,
{ 
    userID: 4,
    name: "Johwdwdwn Doe",
    email: "exampedwle@ecgxyggc.com",
} 

];

const Authenticator = (props) => {
    const [user, setUser] = useState(data[0]);
    const [id, setId] = useState(0);
    useEffect(() => {
        
    }, []);
    return(
        <userContext.Provider value={{setUser, user, data, id, setId}}>
            {props.children}
        </userContext.Provider>
    )
}
export default Authenticator;

