import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';

interface Props{
    title: string
}

const useStyles = makeStyles({
    background: {
        background: `#171717`,
        width: '100%',
        height: '93%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        width: '50%',
    }
})

export const Home = ( props: Props) => {

    const classes = useStyles();

  return (
    <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <div className='if-logged-in'>
                    Hello. Would you like to play a game?
                    And then mark that game off from your backlog so you can
                    finally finish all those games you keep putting off,
                    instead of just buying more and more games because they were
                    'on a great sale', or because you told yourself you'd definitely
                    play it next, even though that was 15 years ago?
                </div>
                <div className="if-not-logged-in">Welcome. Sign in (or up) and start tracking your backlog!</div>
            </div>
        </div>
    </>
  )
}
