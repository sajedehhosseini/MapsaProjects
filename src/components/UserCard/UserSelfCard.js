import React,{useState,useEffect} from 'react';
import styles from './UserSelfCard.module.scss';

const UserSelfCard = (props) => {
    console.log(props.user);
    const [showContent,setShowContent]=useState({
        header: "Hi, My name is",
        content: `${props.user.name.first} ${props.user.name.last}`
    })
    const changeDetail = (title, detail) => {
setShowContent({
    header:title,
    content:detail
})
    }
    return (
        <>
            <div className={styles.card}>
                <div className={styles.piccard} >
                    <img src={props.user.picture.large} className={styles.imgcard} />
                    <button className={styles.changebtn} onClick={props.changeBtn}>Change</button>
                </div>
                <div className={styles.detail}>
                    <p className={styles.header}>{showContent.header}</p>
                    <p className={styles.content}>{showContent.content  }</p>
                </div>
                <ul className={styles.dataperson}>
                    <li onMouseOver={() => changeDetail("Hi, My name is", props.user.name.first)}>name</li>
                    <li onMouseOver={() => changeDetail("My email address is", props.user.email)}>email</li>
                    <li onMouseOver={() => changeDetail("My birthdat is", props.user.dob.date)}>birthday</li>
                    <li onMouseOver={() => changeDetail("My address is", props.user.location.street.number)}>address</li>
                    <li onMouseOver={() => changeDetail("My phone number is", props.user.phone)}>phone</li>
                    <li onMouseOver={() => changeDetail("My password is", props.user.login.password)}>password</li>
                </ul>
            </div>

        </>
    );
}
export default UserSelfCard;