// import { useState, useEffect } from 'react';
// import hummigoIcon from '../assets/hummigoicon.png';
// import googleIcon from '../assets/images/googleicon.png';
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginForm = (props) => {
//     const [buttonStyle, setButtonStyle] = useState(styles.button);

//     function login() {
//         console.log("Logging In...");
//         console.log("Redirecting to Google OAuth...");
//     }

//     const { loginWithRedirect } = useAuth0();

//     useEffect(() => {
//         let userdetails = JSON.parse(localStorage.getItem('@userdetails'));
//         if (userdetails !== null) {
//             props.history.push("/");
//         }
//     }, []);

//     return (
//         <div style={styles.container}>
//             <center>
//                 <div style={styles.heading}>Sign In to VitaLink</div>
//             </center>
//             <center>
//                 <div><img style={styles.img} src={hummigoIcon} alt="Hummigo Icon" /></div>
//             </center>
//             <center>
//                 <div style={styles.text} className="linedText">
//                     To access this website, you must be signed in
//                 </div>
//             </center>
//             <center>
//                 <div
//                     style={buttonStyle}
//                     onMouseEnter={() => { setButtonStyle(styles.buttonActive) }}
//                     onMouseLeave={() => { setButtonStyle(styles.button) }}
//                     onClick={() => { login(); }}>
//                     <img src={googleIcon} style={{ objectFit: 'cover', height: 25, width: 25, marginRight: 15 }} alt="Google Icon" />
//                     <div style={{ paddingTop: 2 }}> <button onClick={() => loginWithRedirect()}>Sign In with Google</button></div>
//                 </div>
//             </center>
//         </div>
//     )
// }

// let styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%',
//         height: '100vh',
//         backgroundColor: 'rgb(245,255,245)'
//     },
//     heading: {
//         fontSize: 45,
//         fontWeight: 'bolder',
//         color: '#088002',
//         paddingTop: '8vh'
//     },
//     img: {
//         objectFit: 'cover',
//         height: '35%',
//         width: '35%',
//         marginTop: '5vh'
//     },
//     button: {
//         backgroundColor: 'white',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignContent: 'center',
//         width: 'fit-content',
//         color: 'rgb(100,100,100)',
//         borderRadius: 4,
//         boxShadow: '0px 0px 5px lightgray',
//         fontSize: 'large',
//         paddingTop: 8,
//         paddingBottom: 8,
//         paddingLeft: 20,
//         paddingRight: 20,
//         cursor: 'pointer'
//     },
//     buttonActive: {
//         backgroundColor: 'white',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignContent: 'center',
//         width: 'fit-content',
//         color: 'rgb(100,100,100)',
//         borderRadius: 4,
//         boxShadow: '0px 0px 10px lightgray',
//         fontSize: 'large',
//         paddingTop: 8,
//         paddingBottom: 8,
//         paddingLeft: 20,
//         paddingRight: 20,
//         cursor: 'pointer'
//     },
//     text: {
//         color: 'gray',
//         fontSize: 'medium',
//         width: '60%',
//         paddingTop: '7vh',
//         paddingBottom: '8vh'
//     }

// }

// export default LoginForm;


import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import hummigoIcon from '../assets/hummigoicon.png';
import googleIcon from '../assets/images/googleicon.png';

const LoginForm = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();
    const [buttonStyle, setButtonStyle] = useState(styles.button);

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('@userdetails', JSON.stringify(user));
            navigate("/home");
        }
    }, [isAuthenticated, user, navigate]);

    return (
        <div style={styles.container}>
            <center>
                <div style={styles.heading}>Sign In to VitaLink</div>
            </center>
            <center>
                <div><img style={styles.img} src={hummigoIcon} alt="Hummigo Icon" /></div>
            </center>
            <center>
                <div style={styles.text} className="linedText">
                    To access this website, you must be signed in
                </div>
            </center>
            <center>
                <div
                    style={buttonStyle}
                    onMouseEnter={() => { setButtonStyle(styles.buttonActive); }}
                    onMouseLeave={() => { setButtonStyle(styles.button); }}
                    onClick={() => { loginWithRedirect(); }}>
                    <img src={googleIcon} style={{ objectFit: 'cover', height: 25, width: 25, marginRight: 15 }} alt="Google Icon" />
                    <div style={{ paddingTop: 2 }}>Sign In with Auth0</div>
                </div>
            </center>
        </div>
    );
};

let styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(245,255,245)'
    },
    heading: {
        fontSize: 45,
        fontWeight: 'bolder',
        color: '#088002',
        paddingTop: '8vh'
    },
    img: {
        objectFit: 'cover',
        height: '35%',
        width: '35%',
        marginTop: '5vh'
    },
    button: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        width: 'fit-content',
        color: 'rgb(100,100,100)',
        borderRadius: 4,
        boxShadow: '0px 0px 5px lightgray',
        fontSize: 'large',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: 'pointer'
    },
    buttonActive: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        width: 'fit-content',
        color: 'rgb(100,100,100)',
        borderRadius: 4,
        boxShadow: '0px 0px 10px lightgray',
        fontSize: 'large',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: 'pointer'
    },
    text: {
        color: 'gray',
        fontSize: 'medium',
        width: '60%',
        paddingTop: '7vh',
        paddingBottom: '8vh'
    }
};

export default LoginForm;
