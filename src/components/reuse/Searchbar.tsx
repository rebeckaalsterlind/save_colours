import React from 'react'

interface Props {
  hideSearchbar(clicked: boolean): void;
}
export default function Searchbar({hideSearchbar}: Props) {
  return (
    <>
      <input type="text" placeholder="Sök färg efter kod.."/>
      <button className="btn btn-primary primary-btn" onClick={() => hideSearchbar(false)}>Sök</button>
    </>
  )
}
