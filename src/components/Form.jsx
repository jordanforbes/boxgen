import React, { useState, useEffect } from 'react';
import "../App.css"


const Form = (props) =>{

    const [color, setColor] = useState("blue")
    // const [boxArr, setBoxArr] = useState([])

    const newBox=e=>{
        // console.log(e.target.value)
        e.preventDefault();
        props.createBox(color)
        console.log("form.js",props.box)
    }

    return(
        <div className="container">
            <div className="row">
                <form onSubmit={newBox}>
                    <div className="form-group">
                        <label>Box Color:</label>
                        <input type="text" name="boxInput" id="boxInput" className="form-control" value={color} onChange={e => setColor( e.target.value)}/>
                        <input type="submit" value="Go"/>
                    </div>
                </form>
            </div>
            <div className="row">
                {/* <div style={{backgroundColor:color, height:200, width:200}} className="box"></div> */}
                
            </div>
        </div>
    )
}

export default Form