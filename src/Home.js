import React from 'react'
// import TextInput from 'compo-forms'
export default function Home() {
  let a = 1;
  return (
 <> 
  {/* <TextInput/> */}
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