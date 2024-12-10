import { TextField, Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [principle, setPrinciple]=useState(0)
  const [rate, setRate]=useState(0)
  const [years, setYears]=useState(0)
  const [interest, setInterest]=useState(0)

  const [invalidPrinciple,setinvalidPrinciple]=useState(false)
  const [invalidRate,setinvalidRate]=useState(false)
  const [invalidYear,setinvalidYear]=useState(false)


  const validateInput=(inputTag)=>{
    console.log(inputTag, typeof inputTag);
    const {name, value}=inputTag
    console.log(!!value.match(/^[0-9]+(\.[0-9]+)?$/)); //double exclamation is used to convert the result into boolean
    console.log(!!value.match(/^\d+(\.\d+)?$/)); //^ and $ is used within the slashes to define regular expressions
    
    if (name=='principle') {
      setPrinciple(value)
      if ( !!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidPrinciple(false)
      }else{
        setinvalidPrinciple(true)
      }
    }else if(name=='rate'){
      setRate(value)
      if ( !!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidRate(false)
      }else{
        setinvalidRate(true)
      }
    }else{
      setYears(value)
      if ( !!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidYear(false)
      }else{
        setinvalidYear(true)
      }
    }


  }

  const handleCalculate=(e)=>{
    e.preventDefault() //predefined method of html to prevent unwanted events
    if (principle && rate && years) {
      setInterest(principle*rate*years/100)
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYears(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
  }


  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh',backgroundColor:'#4dd2ff' }} className='d-flex justify-content-center align-items-center '>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest easily !</p>
          <div className=' p-5 rounded text-center' style={{backgroundColor:'blue'}}>
            <h1 className='text-light'>₹ {interest}</h1>
            <p className='fw-bolder text-light'>Total Simple Interest</p>
          </div>
          <form className='mt-3'>
            <div className='mb-3'>
              {/* Principle  */}
              <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
              {/* invalid Principle */}
              {invalidPrinciple && <div className='text-danger fw-bolder fs-6 mb-3'> *Invalid Principle Amount</div> }


            <div className='mb-3'>
              {/*rate of interest */}
              <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* invalid rate */}
            {invalidRate && <div className='text-danger fw-bolder fs-6 mb-3'> *Invalid Rate</div> }


            <div className='mb-3'>
              {/* Years  */}
              <TextField value={years || ""} name='years' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-years" label="Time Period (Yr)" variant="outlined" />
            </div>
            {/* invalid years */}
            {invalidYear && <div className='text-danger fw-bolder fs-6 mb-3'> *Invalid year</div> }


            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'60px',backgroundColor:'blue'}}>Calculate</Button>
              <Button type='reset' onClick={handleReset} variant="outlined" style={{width:'50%',height:'60px'}} className='border border-danger text-danger'>RESET</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
