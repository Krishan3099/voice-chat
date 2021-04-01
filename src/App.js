//import React Hooks and CSS
import React, {useState, useEffect} from 'react';

import './App.css';

const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

//const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Creates a client
const translate = new Translate({
  credentials: {"type": "service_account", "project_id": "model-augury-229102", "private_key_id": "de3e4ad35f8aa28bcfce5b233f1f24dfe7f0f6e4", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCiCLR96JAdc8ys\nR8FJcVf7Pzq0J0fAjaQoP/hOl80J3UBvMc2TzeTfztf5QduGkMscDFkmXQ2K9gFN\n9YckmFH4aRbapCedW2Y5chpFqVMSTXsEn++LwKG9Xzf5lYioCMbADI8rGurexFIa\nzqZ8HMWgof1h0JUQeDqPFQcWv3E/L09EkJT345LHyQLTjIG+Y5AcN/+KNK44Wm9G\ny6skPLQGwO+IbFnPZG7BNDl2VvxYNL4d5rk/a65ofbIOD1pWcH6M3SP4uqDVnHmc\n5Zanu9Q5wZ1W8ljxa/+ga0iH1OGzdAxdto8wWAlF+MBbsJBY0w+wbkqxF8kT6nBU\nJTN3kqkBAgMBAAECggEACSRHlqDz3I2HeyLTP2MDLTwsgjSDIlR7cf/l8P00hr1y\nYLOlHxUrOAtR+RCjo4xwwSTbNMRkOrZVbYIQPVrQqRy4ut4vE/wvoMcUv2BlvO8d\nJS4m1DIqjeYc4Np0atKP8A7lVu++V5Io9bU6BF+VMNJi2s1rU5IM77ymeTyU1ZUt\nNi4BwRAJVVn0eXck3lIsNg1I59bEjA8tL2FFVZUocgFLh4ZBBsNd4ouD+7Fderb3\no+6go9dgEKyspInRzT9FOIQtfIhqNvx/KiGNszSVdvOfnw/kUdGaJcxLZaqp9B5V\n5/a8HdeibEIIryW/Iky/gEhuY/5T3alQMz/OGbCziQKBgQDXEnKpjdGtCi5mmwFR\nMPDqObsyFI46y5OkjhSMtou+b6uz5a3cqKyayfTCHJSZESM1NsyhQAzOcj2wAA6H\n31+fpGU5dQkTCCmlZaX6VTJVaJYx+Wu2eseDCoSRWNW1osJDRW/Q0aHj2ciLysYi\nL+fbWsyivhvqwiGdqjDUvhc5NQKBgQDA3m4Zc5HaSjPFsuAee/9eLOHAZmgCB0LY\nh7vhnWU2l2mYN3pbbqCFE9lpEtZrcSIOvio4gYh9/VSDuAyjT4/RLfQo6oQMegEq\n7M4Bj+Um62doRYAH4SrgQfTlOmqeNz0n5IwczW/jT0kHyt78pO218Sy9NbZUpP5i\n8oN04WA2HQKBgDgGZjgk6WnaLRwtZLpxtVBOmaUCFcrbHSrQmCnPo7eH/4JtYk0I\n422vDkNCjrMQ88r463VV6gAdYlRmr2JVneNIP9Yn1qVOiwq63/HGH8Z/6CA8iQKQ\nGUjZhI8YRRN7wn8jp20OLs3b/ZHs0JA3Sn6puITsYPlWeMtJek7w9bvBAoGATqVk\n9/Pscbr4SZGbWlLt2xUqKS6ZEtqrI2iV8HYiI5SydmOI/WerBRkG+pW34bAMVz6s\nMMaBRf7bS6rtXFrBJmc6vMSEfCHz//D4QCLRKoGrdRWCE7R5q2C54A9mEoYr5eyI\nReZvzZ0zBn5vV05ZsGtb9vvEEdgF84s4l5yfgvECgYAw983Kia6eyN3bHTHmB5Ul\nVx34wkyY9ZZmr+eTwQ/fpuXjyGbKxdsQi7YHX8LVb2NAOVMBIL0o6v3HMYrN440G\nLxPlL5VYfSImDxlhkDQNPpogcKH7xsj2Fcs/wlJlRbNRXgx3dOW99rPGgdtIwinC\nYd+wbnE5OGSp9oroV9BAQg==\n-----END PRIVATE KEY-----\n", "client_email": "krishan@model-augury-229102.iam.gserviceaccount.com", "client_id": "105032233042094797034", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/krishan%40model-augury-229102.iam.gserviceaccount.com"},
  projectId: "model-augury-229102"
});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
let text = 'The text to translate, e.g. Hello, world!';

async function translateToEnglish() {

  // The target language
  const target = 'en';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  return translation;
}

async function translateToChinese() {
  const target = 'zh';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  return translation;
}

async function translateToHindi() {
  const target = 'hi';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  return translation;
}


//use SpeechRecognition from Chrome (only available in Chrome) and create new Mic
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

//set mic attributes, default to English language
mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'



// Actual App Component
function App() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotesEN, setSavedNotesEN] = useState([])
  const [savedNotesCH, setSavedNotesCH] = useState([])
  const [savedNotesHI, setSavedNotesHI] = useState([])

  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
    mic.lang = value
  }

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if(isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    text = note;
    let translationEN = translateToEnglish();
    let translationCH = translateToEnglish();
    let translationHI = translateToEnglish();
    setSavedNotesEN([...savedNotesEN, translationEN])
    setSavedNotesCH([...savedNotesCH, translationCH])
    setSavedNotesHI([...savedNotesHI, translationHI])
    setNote('')
  }

  return (
    <>
    <h1>Voice Notes</h1>
  
    <div className = "container" id = "bootstrap-overrides">
      <div className="box" id = "bootstrap-overrides">
        <h2>Current Note</h2>
        {isListening ? <span>🎙</span> : <span>🛑🎙</span>}
        {/* <div className="select">
          <select onSelect={handleSelect}>
            <option value='en-US'>English</option>
            <option value='zh-CN'>Chinese</option>
            <option value='hi-IN'>Hindi</option>
          </select>
          <div className="select_arrow">
          </div>
        </div> */}
        <button onClick={handleSaveNote} disabled={!note}>Send Message</button>
        <button onClick={() => setIsListening(prevState => !prevState)}>
          Start/Stop
        </button>
        <p>{note}</p>
      </div>

      <div className="box">
        <h2>English</h2>
        {savedNotesEN.map(n => (
          <p key={n}>{n}</p>
        ))}
      </div>
      <div className="box">
        <h2>Chinese</h2>
        {savedNotesCH.map(n => (
          <p key={n}>{n}</p>
        ))}
      </div>
      <div className="box">
        <h2>Hindi</h2>
        {savedNotesHI.map(n => (
          <p key={n}>{n}</p>
        ))}
      </div>
      <div className = "container">
        <button>Qualtrics Survey</button>
        <button>Bad Translation?</button>
      </div>
    </div>
    </>
  );
}


export default App;
