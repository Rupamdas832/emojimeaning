import React, {useState} from 'react'

export default function Input() {
    const [meaning, setMeaning] = useState(null)

    const emojis = {
        "😀" : "Happy Face",
        "😔" : "Sad Face",
        "🤣" : "Laughing out loud",
        "😍" : "Feeling loved",
        "😴" : "Sleepy",
        "😈" : "Devil intention",
        "🤗" : "Hugs",
        "😑" : "Expresssionless face",
        "😠" : "Angry",
        "🥺" : "Pleading Face",
        "😱" : "Screaming in fear",
        "😰" : "Anxious face"
    }

    const emojisArray = Object.keys(emojis)
    const checkChange = (event) => {
        const value = event.target.value;
        const emojiMeaning = emojis[value];
        setMeaning(emojiMeaning)
    }

    const showMeaning = (emoji) => {
        const emojiMeaning = emojis[emoji];
        setMeaning(emojiMeaning)
    }
    return (
        <div className="container">
            <input className="inputArea" placeholder="Enter emoji to know the meaning" onChange={checkChange}/>
            <div className="meaning">
                <h4>{meaning}</h4>
            </div>
            <div className="emojisShow">
                {emojisArray.map((emoji,index) => {
                    return <h3 key={index} className="emoji" onClick={() => showMeaning(emoji)}>{emoji}</h3>
                })}
            </div>
        </div>
    )
}
