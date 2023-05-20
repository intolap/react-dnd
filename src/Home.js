import React from 'react'

export default function Home() {
  let a = 1;
  return (
 <>
    <div>Parent div</div>
    {( a === 1 ) ? (
      <div> + Add Tags</div>
    )
    :
    <></>
    }
  </>
  )

}