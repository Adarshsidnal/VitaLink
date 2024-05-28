import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const { logout } = useAuth0();
    const navigate = useNavigate();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem('@userdetails'));
    console.log(user);
    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login');
    //     }
    // }, [user, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('@userdetails');
        logout({ returnTo: window.location.origin });
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='navbar-section'>
            <h1 className="navbar-title">
                <Link to="/">
                    VitaLink <span className="navbar-sign">+</span>
                </Link>
            </h1>
            {user ? (
                <div style={styles.navbar}>
                    <div style={styles.userInfo} onClick={toggleDropdown}>
                        <img src={user.picture} alt="User" style={styles.userIcon} />
                    </div>
                    {isDropdownVisible && (
                        <div style={styles.dropdownMenu}>
                            <span>{user.name}</span>
                            <button style={styles.logoutButton} onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div style={styles.navbar}>
                    <span>Loading...</span>
                </div>
            )}
        </div>
    );
};

const styles = {
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        marginRight: 10,
    },
    dropdownMenu: {
        position: 'absolute',
        top: '50px',
        right: '20px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    logoutButton: {
        backgroundColor: '#ff4b5c',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: 4,
        marginTop: '10px',
        width: '100%',
        textAlign: 'left',
    },
};

export default Navbar;
