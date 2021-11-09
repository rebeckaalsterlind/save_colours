import React, { useEffect, useRef, useState } from 'react'
import { store } from '../../store';

interface Props {
  roomInfo: any;
}

export default function AddRoom({ roomInfo }: Props) {

  const inputRef: any = useRef(null);
  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState([]);
  const [inputValue, setinputValue] = useState("Namn..");

  //set the focus on username input
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleClick = (evt: React.FormEvent) => {
    evt.preventDefault();

    const roomToAdd: Object = {
      "roomName": roomName,
      "colors": [],
    }

    roomInfo(roomToAdd)

    const name: any = roomName;
    const roomNames = room.concat(name)
    setRoom(roomNames);
  }

  return (
    <div>
      <form>
        <input ref={inputRef} type="text" placeholder={inputValue} onChange={(evt) => setRoomName(evt.target.value)} />
        <button onClick={handleClick}>Spara rum</button>
      </form>
      <div>

      {
        room.map((roomname: any) => (
          <p>{roomname} har lagts till</p>
        ))
      }
      </div>
    </div>


  )
}
