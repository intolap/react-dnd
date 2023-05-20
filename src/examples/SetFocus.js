import React from 'react'

export default function SetFocus() {

  function onBlur(e){
    console.log(e.target.value);
  }

  return (
    <div><textarea onBlur={(e)=>{onBlur(e)}}></textarea></div>
  )
}
