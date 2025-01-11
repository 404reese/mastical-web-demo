import React from 'react'

const chat = () => {
  return (
    <div className='w-full h-full'>
      {/* <iframe src="https://propstical-poc.streamlit.app/" width="100%" height="800px" frameBorder="0"></iframe> */}
      <iframe
  src="https://propstical-poc.streamlit.app?embed=true"
  style={{ height: '1000px', width: '100%' }}
></iframe>
    </div>
  )
}

export default chat
