import React from "react";
import Image from "next/image";
import Link from "next/link";
import bully from "../../assets/bully.png";
import beefHeart from "../../assets/beef_heart.png";
import buffHeart from "../../assets/buff_heart.png";
import mineHeart from "../../assets/mine_heart.png";
import peaHeart from "../../assets/pea_heart.png";
import soulHeart from "../../assets/soul_heart.png";

const hearts = [beefHeart, buffHeart, mineHeart, peaHeart, soulHeart];

class QuizContainer extends React.Component {
    constructor (props) {
        super(props);
        this.shuffledHearts = hearts.map(value => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value);
        this.state = {heart: this.shuffledHearts[0], heartShown: false};
        this.eatHeart = this.eatHeart.bind(this);
    }

    swapHeart () {
        this.shuffledHearts.push(this.shuffledHearts.shift());
        this.setState({heart: this.shuffledHearts[0]});
    }

    eatHeart () {
        this.swapHeart();
        this.setState({shown: true});
        setTimeout(this.removeHeart.bind(this), 4000);
    }

    removeHeart () {
        const heartDiv = document.getElementById("candy-heart");
        heartDiv.classList.add("animate__zoomOut")
        const that=this;
        setTimeout(() => that.setState({shown: false}), 300);
    }

    render () {
        let candyHeart;
        if (this.state.shown) {
            candyHeart = (
            <div className="heart-background">
                <div id="candy-heart" className="animate__animated animate__zoomIn">
                    <Image src={this.state.heart} alt="candy-heart" />
                </div>
            </div>
            )
        }

        return (
            <div className="modal-background">
                <div className="quiz-modal landing-modal">
                    {candyHeart}
                    <h2>Happy Valentine&apos;s Day, my love!</h2>
                    <div className="bully-image"><Image src={bully} alt="mattis lookalike"/></div>
                    <section className="sappy-text">
                        <p>You are so many things to me: a best friend, confidante, travel buddy, workout partner, and #fitnessgoals.</p> 
                        <p>Even though we can&apos;t be together today, I wanted to put together a little web app to celebrate the occasion.</p>
                        <p>Feel free to click around the buttons below, and don&apos;t ever forget: I LOVE YOU!</p>
                    </section>

                    <h3>What would you like to do?</h3>
                    <div className="options-container">
                        <Link href="/poem">Read a special V-day poem!</Link>
                        <button className="candy-heart-button" onClick={this.eatHeart}>Eat a candy heart!</button>
                        <Link href="/quiz">Take the love quiz!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizContainer;