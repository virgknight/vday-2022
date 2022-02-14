import React from "react";
import Link from "next/link";
import Meta from "../meta";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Poem = () => {
    return (
    <>
        <Meta />

       <div className="modal-background">
            <div className="quiz-modal animate__animated animate__zoomInDown poem-modal">
                <Link href="/"><div className="back-arrow"><ArrowBackIcon sx={{ fontSize: 36 }}/></div></Link>
                <h2 className="shine">A poem for my love</h2>

                <p className="poem">
                    Oh Zak, dear Zak<br/>
                    You're such a snack<br/>
                    Your heart is as huge<br/>
                    As your muscular back<br/><br/>

                    You are as mesmerizing as a Crumbl cookie<br/>
                    (When it comes to cookies, you are no rookie)<br/><br/>

                    Though this message<br/>
                    May seem taboo...<br/>
                    I<br/><span className="indent1">love</span><br/><span className="indent2">you!</span>
                </p>
            </div>
        </div>
        </>
    );
}

export default Poem;