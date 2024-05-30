import React, { useState } from 'react'

function useFolder(data) {
  const [initialData, setInitialData] = useState(data);
  const [expand, setExpand] = useState(false);

  return {
    initialData,
    setInitialData,
    expand,
    setExpand
  }
}

export default useFolder;