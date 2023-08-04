import React, {useState} from 'react'
import '../index.css';

const Bmi = () => {
  const [weight, setweight] = useState(0)
  const [height, setheight] = useState(0)
  const [bmi, setbmi] = useState('')
  const [message, setmessage] = useState('')


  let imgSrc=''

  if (bmi < 1) {
    imgSrc = null
  } else { 
    if(bmi < 25) {
      imgSrc = require('../assets/images/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../assets/images/healthy.png')
    } else {
      imgSrc = require('../assets/images/overweight.png')
    }
  }

  let calcBmi = (event) => {
    // prevent submitting
    event.preventDefault()

    if (weight ===0 || height===0) {
      alert('Please enter a vaud weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setbmi(bmi.toFixed(1))
      
      // Logic for message 

      if (bmi < 25) {
        setmessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setmessage('You are a healthy weight')
      } else {
        setmessage('You are overweight')
      }
    }
  }

  let reload =() => {
    window.location.reload()
  }
  
  return (
    <div className="bmi-wrapper">
      <div>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setheight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit' sx={{ fontWeight: 'bold'}}>SUBMIT</button>
            <button className='btn btn-outline' onClick={reload} typle='submit' sx={{ fontWeight: 'bold'}}>RELOAD</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Bmi