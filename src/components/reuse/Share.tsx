import React from 'react'

interface Props {
  toShare: any
}

export default function Share({toShare}: Props) {
  return (
    <form>
      <label htmlFor="user">Dela {toShare.projectName} med: </label>
      <input type="text" placeholder="Användare"/>
      <button>Skicka</button>
    </form>
  )
}
