import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import OrderCard from './OrderCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        // border:"2px black solid"
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const CardList = (props) => {

    const classes = useStyles();

    const [content, setContent] = React.useState([]);

    useEffect(() => {
        setContent(props.content);
    }, [])

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {content.map((obj, index) => (
                    <GridListTile style={{height:"auto",width:"auto"}} key={index}>
                        <OrderCard {...obj} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default CardList
