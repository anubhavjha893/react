import React, { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'

const App = () => {
  const [boxes,setBoxes] = useState([1])
  const handleSubmitButton = (data)=> {
    setBoxes([...boxes,data])
  }
  const handleRemoveButton = (id)=> {
setBoxes(()=>boxes.filter((item,index)=> index!=id))
  }
  return (
    <div>
      <div className="div h-80 flex gap-5 flex-wrap overflow-auto">
      {boxes.map((item,index)=> <Card key={index} index={index}  handleRemoveButton={handleRemoveButton} data={item}/>)}
      </div>
      <Form handleSubmitButton={handleSubmitButton} />
    </div>
  )
}

export default App