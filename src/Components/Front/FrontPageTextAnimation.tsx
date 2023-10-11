import React, { useEffect, useState } from "react";
import './FrontPage.css';


const text1 = `
In the vibrant gaming landscape of Norway, a formidable team has emerged to redefine excellence in Valorant esports. 
They are the Revengers, a powerhouse collective of determined players hailing from the picturesque landscapes of Norway.
The Revengers are more than just a team; they are a band of digital heroes, each with a unique set of skills that make them a force to be 
reckoned with in the world of Valorant. From unrivaled aim to strategic brilliance, the Revengers are a harmonious blend of talents, 
united by their shared passion for competitive gaming.
`;

const text2 = `Hailing from the land of fjords and auroras, the Revengers embody the spirit of their homeland - rugged, determined, and always reaching for the summit. In the heart of Norway's gaming community, they've forged their destiny, ready to leave their mark on the global stage.
`;

const text3 = `Valorant, Riot Games' tactical first-person shooter, serves as the battleground where Revengers hone their skills and showcase their prowess. They've dissected every map, every agent, and every strategy, making them a formidable adversary for any challenger.
`;
const text4 = `The Revengers are more than just a team; they are an inspiration to aspiring gamers across Norway. They're pushing the boundaries of esports, showing that dedication and teamwork can turn dreams into reality.
`;
const text5 = `As they embark on their quest for glory, we invite you to follow the Revengers' journey through the highs and lows of competitive Valorant. Stay tuned for thrilling matches, jaw-dropping plays, and a relentless pursuit of excellence. Revengers: Norway's Valorant Vanguard - Watch them Rise!
`;
const highlightedWords = ["gaming", "Revengers", "united", "Norway"];
const highlightedWords2 = ["fjords", "global"];
const highlightedWords3 = ["skills", "strategy,"];
const highlightedWords4 = ["inspiration", "esports,", "teamwork"];
const highlightedWords5 = ["glory,", "journey", "Rise!"];
function FrontPageTextAnimation() {
    let w1 = false;
    let w2 = false;
    let w3 = false;
    let w4 = false;
    let w5 = false;
    let w6 = false;

    const words1 = text1.split(/\s+/).filter((word) => word.trim() !== '');
    const words2 = text2.split(/\s+/).filter((word) => word.trim() !== '');
    const words3 = text3.split(/\s+/).filter((word) => word.trim() !== '');
    const words4 = text4.split(/\s+/).filter((word) => word.trim() !== '');
    const words5 = text5.split(/\s+/).filter((word) => word.trim() !== '');

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
    const [currentWordIndex3, setCurrentWordIndex3] = useState(0);
    const [currentWordIndex4, setCurrentWordIndex4] = useState(0);
    const [currentWordIndex5, setCurrentWordIndex5] = useState(0);
    const [currentWordIndex6, setCurrentWordIndex6] = useState(0);

    useEffect(() => {
        if (currentWordIndex < words1.length) {
            const timer = setTimeout(() => {
                setCurrentWordIndex((prevIndex) => prevIndex + 1);
            }, 100); // 2-second delay
            return () => clearTimeout(timer);
        }
        else
            w1 = true;
    }, [currentWordIndex, words1]);
    useEffect(() => {
        if (w1 == true) {
            if (currentWordIndex2 < words2.length) {
                const timer = setTimeout(() => {
                    setCurrentWordIndex2((prevIndex) => prevIndex + 1);
                }, 100); // 2-second delay
                return () => clearTimeout(timer);
            }
            else
                w2 = true;
        }
    }, [currentWordIndex2, words2]);
    useEffect(() => {
        if (w2 == true) {
            if (currentWordIndex3 < words3.length) {
                const timer = setTimeout(() => {
                    setCurrentWordIndex3((prevIndex) => prevIndex + 1);
                }, 100); // 2-second delay
                return () => clearTimeout(timer);
            }
            else
                w3 = true;
        }
    }, [currentWordIndex3, words3]);
    useEffect(() => {
        if (w3 == true) {
            if (currentWordIndex4 < words4.length) {
                const timer = setTimeout(() => {
                    setCurrentWordIndex4((prevIndex) => prevIndex + 1);
                }, 100); // 2-second delay
                return () => clearTimeout(timer);
            }
            else
                w4 = true;
        }
    }, [currentWordIndex4, words4]);
    useEffect(() => {
        if (w4 == true) {
            if (currentWordIndex5 < words5.length) {

                const timer = setTimeout(() => {
                    setCurrentWordIndex5((prevIndex) => prevIndex + 1);
                }, 100); // 2-second delay
                return () => clearTimeout(timer);
            }
            else
                w5 = true;
        }
    }, [currentWordIndex5, words5]);
    const leftImages = [
        '../sova.gif',
        '../cypher.gif',
        '../kj.gif',
        '../breach.gif',
    ];

    const rightImages = [
        '../brim.gif',
        '../omen.gif',
        '../kayo.gif',
        '../viper.gif',
    ];
    return (
        <div className="container">
            <div className="left">
                {leftImages.map((image, index) => (
                    <img key={index} src={image} alt={`Left Image ${index}`} />
                ))}
            </div>

            <div className="middle">
                <div className="fading-text">
                    <h1>Introducing "Revengers" - Norway's Valorant Vanguard</h1>
                    {words1.map((word, index) => (
                        <span
                            key={index}
                            className={`fade-in-word ${currentWordIndex >= index ? 'visible' : ''} ${highlightedWords.some(x => x === word) ? 'gradual-red-fade-in' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="fontChanger">
                                {word}
                            </div>
                            {index !== words1.length - 1 ? ' ' : ''} {/* Add space between words */}
                        </span>

                    ))}
                    <h1>Unveiling the Heroes:</h1>
                    {words2.map((word2, index) => (
                        <span
                            key={index}
                            className={`fade-in-word ${currentWordIndex2 >= index ? 'visible' : ''} ${highlightedWords2.some(x => x === word2) ? 'gradual-red-fade-in' : ''}`}
                            style={{ animationDelay: `${(currentWordIndex + index) * 0.1}s` }}
                        >
                            <div className="fontChanger">
                                {word2}
                            </div>
                            {index !== words2.length - 1 ? ' ' : ''} {/* Add space between words */}
                        </span>

                    ))}
                    <h1>Norway's Finest:</h1>
                    {words3.map((word3, index) => (
                        <span
                            key={index}
                            className={`fade-in-word ${currentWordIndex3 >= index ? 'visible' : ''} ${highlightedWords3.some(x => x === word3) ? 'gradual-red-fade-in' : ''}`}
                            style={{ animationDelay: `${(currentWordIndex + currentWordIndex2 + index) * 0.1}s` }}
                        >
                            <div className="fontChanger">
                                {word3}
                            </div>
                            {index !== words3.length - 1 ? ' ' : ''} {/* Add space between words */}
                        </span>

                    ))}
                    <h1>Mastering Valorant:</h1>
                    {words4.map((word4, index) => (
                        <span
                            key={index}
                            className={`fade-in-word ${currentWordIndex4 >= index ? 'visible' : ''} ${highlightedWords4.some(x => x === word4) ? 'gradual-red-fade-in' : ''}`}
                            style={{ animationDelay: `${(currentWordIndex + currentWordIndex2 + currentWordIndex3 + index) * 0.1}s` }}
                        >
                            <div className="fontChanger">
                                {word4}
                            </div>
                            {index !== words4.length - 1 ? ' ' : ''} {/* Add space between words */}
                        </span>

                    ))}
                    <h1>Join the Journey:</h1>
                    {words5.map((word5, index) => (
                        <span
                            key={index}
                            className={`fade-in-word ${currentWordIndex5 >= index ? 'visible' : ''} ${highlightedWords5.some(x => x === word5) ? 'gradual-red-fade-in' : ''}`}
                            style={{ animationDelay: `${(currentWordIndex + currentWordIndex2 + currentWordIndex3 + currentWordIndex4 + index) * 0.1}s` }}
                        >
                            <div className="fontChanger">
                                {word5}
                            </div>
                            {index !== words5.length - 1 ? ' ' : ''} {/* Add space between words */}
                        </span>

                    ))}
                </div>
            </div>
            <div className="right">
                {rightImages.map((image, index) => (
                    <img key={index} src={image} alt={`Right Image ${index}`} />
                ))}
            </div>

        </div>
    )
}
export default FrontPageTextAnimation;