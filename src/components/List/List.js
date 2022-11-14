import React from 'react'
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyle = makeStyles((theme)=>({
    root:{
        width: '400px',
        backgroundColor: '#F0F0F0',
        marginLeft: theme.spacing(1),
    }
}

));
export default function List() {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title />
            </Paper>
        </div>
  );
}