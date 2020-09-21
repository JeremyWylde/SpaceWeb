import React, {useEffect, useState} from 'react';
import '../../App.css';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useDispatch, useSelector} from "react-redux";
import {getNewsThunk} from "../../2_bll/newsReducers";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        "font-family": "proxima-nova",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "19px",

    },
    img: {
        "width": '50px'
    },
    yo: {
        "background-color": "white",
    },
    active: {
        "background-color": "#F3FCFF"
    },
    title: {
        "background-color": "white",
        "font-family": "proxima-nova",
        "font-weight": "800",
        "font-size": "12px",
        "line-height": "15px",
        "height": "4rem",
        "padding-left": "1rem",
        "padding-top": "1rem"
    },
    title2: {
        "background-color": "white",
        "font-family": "proxima-nova",
        "font-weight": "700",
        "font-size": "20px",
        "line-height": "24px",
    }

}));

const News = () => {
    const classes = useStyles();
    const [select, setSelect] = useState(-1);

    const {news} = useSelector(store => store.news);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewsThunk())
    }, [dispatch])

    const selectActiveTopic = (index) => {
        if (index === select)
            setSelect(-1)
        else
            setSelect(index)
    }

    return (
        <>
            <div
                className={classes.title}>Бортовой Журнал<br/>
                <div className={classes.title2}>Бортовой Журнал</div>
            </div>
            {news && news.map((topic, index) => {
                return index < 11 ? <Accordion expanded={select === index ? true : false}
                                               key={index}
                                               className={select === index ? classes.active : classes.yo}
                                               onClick={() => selectActiveTopic(index)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography component={'span'}
                            className={classes.heading}>{news[index] && news[index].title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'span'}>
                            {news[index] &&
                            <div className="sup" dangerouslySetInnerHTML={{__html: news[index].content}}></div>}
                        </Typography>
                    </AccordionDetails>
                </Accordion> : ""
            })}
        </>
    );
}

export default News
