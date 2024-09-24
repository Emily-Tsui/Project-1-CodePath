
import uni from './assets/uni-ball.svg'
import pilot from './assets/Pilot-Pen.svg'
import rotring from './assets/Rotring-Pencils.svg'
import pentel from './assets/Pentel.svg'
import fabercastell from './assets/Faber-Castell-Icon.svg'
import molotow from './assets/Molotow-Logo.png'
import leuchtturm from './assets/Leuchtturm.png'
import moleskin from './assets/Moleskin.png'
import staedtler from './assets/Staedtler.png'
import mead from './assets/Mead.png'
import './App.css'

function App() {
  

  return (
    <>
      <div className="title-container">
        <h1 className="website-title">Stationary Picks!</h1>
        <img src="android-chrome-192x192.png" className = "pencil" alt="Pencil" />
      </div>

      <div className="gallery">

        <div className="card">
          <img src={uni} className="logo" alt="Uni ball logo" />
          <button onClick={() => window.open("https://www.unibrands.co/", "_blank")}>
            Check out the website
          </button>
        </div>
        
        <div className="card">
            <img src={pilot} className="logo" alt="Pilot Pen logo" />
            <button onClick={() => window.open("https://pilotpen.us/", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={rotring} className="logo" alt="Rotring Pencils logo" />
            <button onClick={() => window.open("https://www.rotring.com/pens-pencils/mechanical-pencils/", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={pentel} className="logo" alt="Pentel Pencils logo" />
            <button onClick={() => window.open("https://www.pentel.com/collections/pencils?srsltid=AfmBOoqG_JUHgbm_8wovNzJ-GwaR-MK7NgzuuS7pqmEBZytZAOJPU2cQ", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={fabercastell} className="logo" alt="Faber-Castell logo" />
            <button onClick={() => window.open("https://www.fabercastell.com/?srsltid=AfmBOooKFKs_CWoQaM4yTO7li9Qb60H94Ga7m3CP70Ikj3CnLHyozb-2", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={molotow} className="logo" alt="Molotow logo" />
            <button onClick={() => window.open("https://www.molotow.com/en/", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={leuchtturm} className="logo" alt="Leuchtturm 1917 logo" />
            <button onClick={() => window.open("https://www.leuchtturm1917.us/", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={moleskin} className="logo" alt="Moleskin logo" />
            <button onClick={() => window.open("https://www.moleskine.com/en-us/", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={staedtler} className="logo" alt="Staedtler logo" />
            <button onClick={() => window.open("https://www.staedtler.com/us/en/", "_blank")}>
            Check out the website
            </button>
        </div>

        <div className="card">
            <img src={mead} className="logo" alt="Mead logo" />
            <button onClick={() => window.open("https://www.mead.com/", "_blank")}>
            Check out the website
            </button>
        </div>

      </div>

    </>
  )
}

export default App
