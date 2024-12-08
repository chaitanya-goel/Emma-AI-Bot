import React, { useContext } from 'react'
import "./App.css"
import va from "./Assets/ai.png"
import { FaMicrophone } from "react-icons/fa";
import { datacontext } from './context/UserContext';
import speak_img from "./Assets/speak.gif" 
import ai_voice from "./Assets/aiVoice.gif"

const App = () => {
  let {recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse} =  useContext(datacontext)
 

  
  return (
    <div className='main'>
        <img src={va} alt="" id='emma'/>
        <span>I'm Emma, Your Advanced Virtual Assistant</span>
        {!speaking? <button onClick={()=>{
            setPrompt("Listening...")
            setSpeaking(true)
            setResponse(false)
      recognition.start()
        }}>Click Here <FaMicrophone /></button>
        :
     <div className='response'>
        {!response? <img src={speak_img} alt=''id='speakimg'/>: <img src={ai_voice} alt='' id='aiimg'/> } 
        <p>{prompt}</p>
        </div>
        
    
    }
        
     
    </div>
  )
}

export default App
