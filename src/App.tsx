import { useState } from 'react';
import {Link, Outlet} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div style={{display: 'flex', gap: '15px'}}>
            <Link to='about'>about</Link>
            <Link to='welcome'>welcome</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default App
