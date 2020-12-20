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

    const checkEmoji = (data) => {
        const emojiMeaning = emojis[data];
        setMeaning(emojiMeaning)
        if(emojiMeaning === undefined){
            setMeaning("Emoji not in DB, try emojis given below...")
        }
    }
    const checkChange = (event) => {
        const value = event.target.value;
        checkEmoji(value)
    }

    const clickEmoji = (emoji) => {
        checkEmoji(emoji)
    }
    return (
        <div className="container">
            <input className="inputArea" placeholder="Enter emoji to know the meaning" onChange={checkChange}/>
            <div className="meaning">
                <h4>{meaning}</h4>
            </div>
            <div className="emojisShow">
                {emojisArray.map((emoji,index) => {
                    return <h3 key={index} className="emoji" onClick={() => clickEmoji(emoji)}>{emoji}</h3>
                })}
            </div>
        </div>
    )
}
