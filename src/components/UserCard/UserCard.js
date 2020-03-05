import React, { useState, useEffect } from 'react';
// import styles from "./UserCard.module.scss";
import UserSelfCard from './UserSelfCard'

const UserCard = (props) => {

    return (
        <>
            {
                props.users.map((user, index) =>
                    <UserSelfCard key={index} user={user} changeBtn={props.handleChangeBtn}/>
                )
            }
        </>
    );
}



// const UserCard = ({newuser}) => {
//     console.log(newuser);
//     const [userlist, setUserlist]= useState([])
//     useEffect(()=>{
//         // setUserlist(newuser)
//         console.log('ok');
//         // console.log(userlist);

//     })

//     return (
//         <>

//         </>
//     );
// }

export default UserCard;
