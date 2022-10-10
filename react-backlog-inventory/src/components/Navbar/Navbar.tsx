import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/site-logo.png';

const useStyles = makeStyles({
    logo: {
        content: `url(${Logo})`,
        maxWidth: '30px',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    siteName: {
        margin: 'auto',
        fontFamily: `Georgia, 'Times New Roman', Times, serif`,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#FFFFFF',
        zIndex: 1,
    },
    navbarItem: {
        color: 'black',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '70%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {

    const classes = useStyles();
  return (
    <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.spaceBetween}`}>
        <div className={`${classes.navlogo}`} >
            <Link to='/' className={`${classes.logo} ${classes.p5}`}><img className={classes.logo}src={Logo}></img></Link>
            <span className={classes.siteName}>Backlog Tracker</span>

        </div>
        <div className={`${classes.width60} ${classes.alignCenter}`}>
            <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                <li>
                    <Button>
                        <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Home</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Backlog</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Logout</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/' className={`${classes.navbarItem} ${classes.psides}`}>Sign Up</Link>
                    </Button>
                </li>
            </ul>
        </div>
    </div>
  )
}
