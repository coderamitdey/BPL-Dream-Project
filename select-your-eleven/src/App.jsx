import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json()
}

const playersPromise = fetchPlayers()

function App() {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(1000000)


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1280px] mx-auto flex justify-between mt-4'>
        <h1 className='text-4xl font-bold text-orange-400 ml-2'>Available Players</h1>
        
        <div className='font-semibold text-orange-400'>
          
          <button onClick={() => setToggle(true)} className={`py-2 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true? "bg-[#E7FE29]" : ""}`}>Available</button>

        <button onClick={() => setToggle(false)} className={`py-2 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false? "bg-[#E7FE29]" : ""}`}>Selected</button>
        </div>

      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers></SelectedPlayers>
      }

    </>
  )
}

export default App
