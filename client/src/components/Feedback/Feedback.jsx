import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Feedback.css'

export default function Feedback() {
    const [essayvalue, setEssayValue] = React.useState(null);
    // const [sitevalue, setSiteValue] = React.useState(null);
    return (
        <div>
            <h1>Feedback</h1>
            <Box component="fieldset" mb={5} borderColor="transparent">
                <Typography component="legend">Essay Rating</Typography>
                <Rating
                    name="simple-controlled"
                    precision={0.5}
                    value={essayvalue}
                    onChange={(event, newEssayValue) => {
                        setEssayValue(newEssayValue);
                    }}
                />
            </Box>

            {/* review box for site rating below */}
            
            {/* <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Website Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={sitevalue}
                    precision={0.5}
                    onChange={(event, newSiteValue) => {
                        setSiteValue(newSiteValue);
                    }
                    }
                />
            </Box> */}

            {/* show a button if essayvalue is 5 */}
            {essayvalue === 5 ?
                <button>Leave us a review</button>
                : null}



        </div>
    );
}
