import React, { useState } from 'react'

const Article = ({ title, content }) => {
const [showContent, setShowContent] = useState(false);
  return (
    <div>
        <h3>Article</h3>
        <h1>{title}</h1>
        <button
          onClick={() => setShowContent(!showContent)}
        >
          Know More
        </button>
        {showContent && <p>{content}</p>}
    </div>
  )
}

export default Article