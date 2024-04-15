import { useState, useEffect } from 'react';
import hummigoIcon from '../assets/hummigoicon.png';
import googleIcon from '../assets/images/googleicon.png';
const LoginForm = (props) => {
    const [buttonStyle, setButtonStyle] = useState(styles.button);

    function login() {
        console.log("Logging In...");
        // You can replace this with your Google OAuth logic
        // For simplicity, I'm just logging a message here
        console.log("Redirecting to Google OAuth...");
        // Once the user is logged in via Google, you can redirect them
        // to your application's home page or wherever you need
    }

    useEffect(() => {
        let userdetails = JSON.parse(localStorage.getItem('@userdetails'));
        if (userdetails !== null) {
            props.history.push("/");
        }
    }, []);

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
                    onMouseEnter={() => { setButtonStyle(styles.buttonActive) }}
                    onMouseLeave={() => { setButtonStyle(styles.button) }}
                    onClick={() => { login(); }}>
                    <img src={googleIcon} style={{ objectFit: 'cover', height: 25, width: 25, marginRight: 15 }} alt="Google Icon" />
                    <div style={{ paddingTop: 2 }}>Sign In with Google</div>
                </div>
            </center>
        </div>
    )
}

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

}

export default LoginForm;
