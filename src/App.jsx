import { useState } from 'react';
import './App.css'


const messages = [
  'Start the Process',
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0) 
  const [isOpen, setIsOpen] = useState(true)

  const handleNext = () => {
    if(step < 3) {
      setStep((s) => s + 1)
    }
   } 

  const handlePrev = () =>{
    if(step > 0){
      setStep((step)=> step - 1)
    }
  }

 
  return (
  <div className='app'>
    <div className='close' onClick={()=> setIsOpen(!isOpen)}>&times;</div>

    <div className='steps-wrapper'>
    {isOpen &&  <div className='steps'>
    <div className='numbers'>
        <div className={step >= 1 ? 'active':'' }>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' :'' } >3</div>
    </div>
    <p>{messages[step]}</p>
    <div className='prev-next'>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
   </div>}
    </div>
  </div>
  )
}

export default App
