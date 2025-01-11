import React from 'react'

const chat = () => {
  return (
    <div>
      {/* <iframe src="https://propstical-poc.streamlit.app/" width="100%" height="800px" frameBorder="0"></iframe> */}
      <iframe
  src="https://30days.streamlit.app?embed=true"
  style={{ height: '450px', width: '100%' }}
></iframe>
    </div>
  )
}

export default chat
