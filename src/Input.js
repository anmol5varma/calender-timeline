import { useState } from "react"

const Input = ({ onSubmit }) => {
    const [text, setText] = useState('')

    const handleChange = evt => {
        setText(evt.target.value)
    }

    return (
        <div>
            <label htmlFor="timezone">Select Timezone:</label>
            <select id="timezone" onChange={handleChange}>
                <option value="America/New_York">New York</option>
                <option value="Europe/London">London</option>
                <option value="Asia/Tokyo">Tokyo</option>
                <option value="Asia/Calcutta">Kolkata</option>
            </select>
            <button onClick={() => onSubmit(text)}>Change timezone</button>
        </div>
    )
}

export default Input