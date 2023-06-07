import React from 'react'

const Display = ({question,index,changeHandler }) => {
  const handler = e=>{
    let temp = question.answer === e.target.value ? 1:0;
    changeHandler(temp,index);
  }
  return (
    <div className='question'>
      <h3>{question.title}</h3>
      <div onChange={handler}>
        <h4><input type="radio" value="A" name={index} /> {question.options[0]} &nbsp;
        <input type="radio" value="B" name={index} /> {question.options[1]} &nbsp;
        <input type="radio" value="C" name={index} /> {question.options[2]} &nbsp;
        <input type="radio" value="D" name={index} /> {question.options[3]} &nbsp; </h4>


      </div>

    </div>
  )
}

export default Display;