import React from 'react'
import {makeStyles, Container, Typography} from '@material-ui/core'
import Carousel from './Carousel'

const useStyles =makeStyles(() => ({
    banner: {
        backgroundImage: 'url(./banner2.jpg)'
    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection:'column',
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagLine:{
        display: 'flex',
        height: "40%",
        flexDirection: "column",
        justifyContent: "center"
    }
}))
const Banner = () => {
    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagLine}>
                    <Typography 
                    variant='h2'
                    style={{
                        fontWeight: 'bold',
                        marginBottom: "15",
                        fontFamily: "Montserrat",
                        textAlign: 'center',
                        letterSpacing: '4px'
                    }}>
                        Crypto  X
                    </Typography>
                    <Typography 
                    variant='subtitle2'
                    style={{
                       color: 'gold',
                        fontFamily: "Montserrat",
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        marginTop: "20px",
                        fontSize: '20px'
                    }}>
                        Get all info about your favourite crypto currency
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner
