import React, { useState } from 'react';
import "./CatBox.scss"

const CatBox = () => {
    const [catImg, setCatImg] = useState("https://cdn2.thecatapi.com/images/q3fsSXiaj.png");
    const [count, setCount] = useState(0);

    const getImgUrl = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => {setCatImg(data[0].url)});
    };

    const hideText = () => {
        document.querySelector("h4").classList.add("hide");
    };

    const getRandomMessage = () => {
        const messages = ["How cute they are!", "I like this one)", "I like cats!"];
        document.querySelector(".main_popup").innerHTML = messages[Math.floor(Math.random() * messages.length)];
    };

    const showPopUp = () => {
        if(count >= 2) {
            document.querySelector(".main_popup").classList.remove("hide");
            getRandomMessage()
        };
    };

    return (

        <div className="main">
            <div className="main_top">
                <h4>While i'm looking for a job you can look at this cute cats</h4>
                <h4 className="main_popup hide">Cats</h4>
            </div>
      
            <div className="main_container">
                <div className="main_container_img-box">
                    <img src={catImg} alt="cat" width={550} />
                </div>
            </div>

            <div className="main_bottom">
                <button onClick={() => {getImgUrl(); hideText(); setCount(count + 1); showPopUp()}}>
                    Get a cat!
                </button>
            </div>
        </div>
    );
};

export default CatBox;