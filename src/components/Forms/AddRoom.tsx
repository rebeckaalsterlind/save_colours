import React, { useEffect, useRef } from 'react'

export default function AddRoom() {

  const inputRef:any = useRef(null);

  //set the focus on username input
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <form>
      <input ref={inputRef} type="text" placeholder="Namn.." />
      <button>Spara rum</button>
    </form>
  )
}
