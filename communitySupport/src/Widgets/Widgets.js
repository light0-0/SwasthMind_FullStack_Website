import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{ subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            

            {newsArticle("You are not alone. You are not defined by your depression." ,"-Unknown")}
            {newsArticle("It's okay to not have it all together. It's okay to ask for help. It's okay to not be okay." ,"-Unknown")}
            {newsArticle("Depression is not a weakness, it's a sign of having been strong for too long.","-Unknown")}

        </div>
    );
}

export default Widgets;
