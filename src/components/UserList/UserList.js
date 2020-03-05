import React, { useState, useEffect } from 'react';
import SvgLoading from './assest/loading.svg';
import Styles from './UserList.module.scss';
import UserCard from './../UserCard/UserCard'

const UserList = () => {
    const [user, setUser] = useState([]);
    const [link, setLink] = useState("https://api.randomuser.me/");

    useEffect(() => {
        if (link) {
            fetch(link)
                .then(res => res.json())
                .then(res => {
                    setUser([...user, res.results[0]]);

                })
        }
    }, [link])

    const handleNewUser = (newlink) => {y
        setLink('');
        setTimeout(() => {
            setLink(newlink);
        }, 1000);

    }
    const handleChangeUser = () => {
        console.log('chngeuser');

    }
    console.log(user);

    return (
        <>
            <div className={Styles.list}>
                {/* <img className={Styles.svgloader} src={SvgLoading} /> */}
                <UserCard users={user} handleChangeBtn={() => handleChangeUser()} />
                <button className={Styles.newuserbutton} onClick={() => handleNewUser("https://api.randomuser.me/")}>Add New User</button>
            </div>
        </>
    );
}

export default UserList;
