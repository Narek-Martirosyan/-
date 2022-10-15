import { useState } from "react";
import "./morse.scss";
import Button from 'react-bootstrap/Button';

const alphabet = {
    a: ".- ",
    b: "-... ",
    c: "-.-. ",
    d: "-.. ",
    e: ". ",
    f: "..-. ",
    g: "--. ",
    h: ".... ",
    i: ".. ",
    j: ".--- ",
    k: "-.- ",
    l: ".-.. ",
    m: "-- ",
    n: "-. ",
    o: "--- ",
    p: ".--. ",
    q: "--.- ",
    r: ".-. ",
    s: "... ",
    t: "- ",
    u: "..- ",
    v: "...- ",
    w: ".-- ",
    x: "-..- ",
    y: "-.-- ",
    z: "--.. ",
    0: "----- ",
    1: ".---- ",
    2: "..--- ",
    3: "...-- ",
    4: "....- ",
    5: "..... ",
    6: "-.... ",
    7: "--... ",
    8: "---.. ",
    9: "----. "
}

export const Morse = () => {
    const [text, setText] = useState("");
    const [err, setErr] = useState("")
    let splitedText = text.split("");
    let translatedText = [];
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    let ctx = new AudioContext();
    let dot = 1.2 / 15;
    const wrongText = "Wrong text: Please write only English words without any symbols!!!";
    const errText = "Cannot play code befor initialization!!!"

    const playMorseCode = (val) => {
        if (!val.length || val.every(symb => symb === "/ ")) {
            setErr(errText)
            return;
        }

        let t = ctx.currentTime;

        let oscillator = ctx.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.value = 600;


        let gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, t);


        translatedText.join("").split("").forEach(function (letter) {
            // eslint-disable-next-line
            switch (letter) {
                case ".":
                    gainNode.gain.setValueAtTime(1, t);
                    t += dot;
                    gainNode.gain.setValueAtTime(0, t);
                    t += dot;
                    break;
                case "-":
                    gainNode.gain.setValueAtTime(1, t);
                    t += 3 * dot;
                    gainNode.gain.setValueAtTime(0, t);
                    t += dot;
                    break;
                case " ":
                    t += 7 * dot;
                    break;
            }
        });

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start()

        return false;
    }



    for (let i = 0; i < splitedText.length; i++) {
        if (alphabet[splitedText[i].toLowerCase()] === undefined &&
            !translatedText.includes(wrongText) &&
            splitedText[i].trim() !== " ".trim()
        ) {
            translatedText.splice(0);
            translatedText.push(wrongText)
        }

        if (!translatedText.includes(wrongText)) {
            if (splitedText[i].trim() === " ".trim()) {
                translatedText.push("/ ");
            } else {
                translatedText.push(alphabet[splitedText[i].toLowerCase()]);
            }
        }
    }

    return (
        <div className="morse-alph mt-5">
            <textarea
                className="morse-code-field"
                placeholder="Please write only English words without any symbols"
                onChange={(e) => {
                    setText(e.target.value);
                    setErr("");
                }}>
            </textarea>
            <div className="morse-code-translate-field">{err ? err : translatedText.join("")}</div>
            <Button variant="outline-primary mt-3 mb-3" onClick={() => playMorseCode(translatedText)}>Play Code</Button>
        </div>
    )
}