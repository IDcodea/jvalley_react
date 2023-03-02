import { Fragment, useState } from "react"
import Navbar from "./components/navbar"

export default function App() {
  const [count, setCount] = useState(1)
  const [Text, setText] = useState("default text")
  const [fontSize, setfontSize] = useState(16)
  const [Color, setColor] = useState('black')

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1>Jumlah : {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Tambah
        </button>

        <button
          onClick={() => {
            if (count >= 1) {
              setCount(count - 1)
              return
            }
          }}
        >
          Kurang
        </button>

        <h3
          style={{
            fontSize: fontSize + "px",
            color: Color,
          }}
        >
          {Text}
        </h3>
        <input
          type="text"
          placeholder="Masukkan Text"
          onChange={(e) => {
            setText(e.target.value)
          }}
        />

        <div>
          <input
            type="range"
            min={1}
            max={100}
            onChange={(e) => {
              setfontSize(e.target.value)
            }}
          />
        </div>
        <div>
          <input
            type="color"
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}
