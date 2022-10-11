import React from 'react'

const Modalchild = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            margin: "0 auto",
            maxWidth: "500px",
            marginTop: "200px",
            border: "1px solid black",
            background: "gray"
        }}>
            <button style={{ background: "white", width: "15%", cursor: "pointer" }} onClick={props.onClose}>CLOSE</button>
            <h1 style={{ textAlign: "center" }}>MODAL</h1>
            <label htmlFor="">Your Name:</label>
            <input style={{ marginTop: "20px" }} type="text" placeholder='fullname' />
        </div>
    )
}

export default Modalchild