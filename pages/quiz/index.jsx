import React from "react";
import Link from "next/link";
import { withRouter } from 'next/router'
import Meta from "../meta";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputString: "", errorMsg: "", correct: false};
        this.numLetters = 0;
        this.interval = undefined;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (e) {
        this.numLetters = this.numLetters + (e.nativeEvent.data ? 1 : -1);
        if (this.numLetters < 0) this.numLetters = 0;
        if (this.numLetters > 8) this.numLetters = 8;
        this.setState({inputString: "Virginia".slice(0, this.numLetters), errorMsg: ""})
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.state.inputString !== "Virginia") {
            this.setState({errorMsg: "Oopsie! That answer is not correct. Try entering Virginia or Zak!"});
        } else {
            this.setState({correct: true});
            this.interval = setInterval(() => this.props.router.push("/"), 10000);
        }
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render () {
        let hearts, correctText;
        if (this.state.correct) {
            hearts = (<div className="hearts">
                <div className="heart"><FavoriteIcon sx={{ fontSize: 32, color: "#fc6c85" }}/></div>
                <div className="heart"><FavoriteIcon sx={{ fontSize: 32, color: "#fc6c85" }}/></div>
                <div className="heart"><FavoriteIcon sx={{ fontSize: 32, color: "#fc6c85" }}/></div>
                <div className="heart"><FavoriteIcon sx={{ fontSize: 32, color: "#fc6c85" }}/></div>
            </div>);
            correctText = (
                <>
                    <p className="correct-text">That is correct! Virginia DOES love Zak more!</p>
                    <p className="correct-text">Splendid job! You have aced the love quiz!</p>
                </>
            )
        }

        return (
        <>
        <Meta />
       <div className="modal-background">
           {hearts}
            <div className="quiz-modal animate__animated animate__flipInX">
                <Link href="/"><div className="back-arrow"><ArrowBackIcon sx={{ fontSize: 36 }}/></div></Link>
                <h2 className="shine">The Love Quiz</h2>

                <div className="quiz-desc">
                    <p>I know... I know... a studious grad student such as yourself has been inundated by quizzes over the last few months.</p>
                    <p>But luckily for you, this quiz is quite short!</p>
                    <p>As we both know, there is really only one question that truly matters...</p>
                </div>
                
                <form>
                    <h6>1. Who loves the other more: Virginia or Zak?</h6>
                    <div>
                        <input placeholder="Enter name here..." value={this.state.inputString} onChange={this.handleInput}/>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                <p className="error">{this.state.errorMsg}</p>
                {correctText}
            </div>
        </div>
        </>
    );
    }
}

export default withRouter(Quiz);