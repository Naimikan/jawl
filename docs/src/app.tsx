import { useEffect, useRef, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

import '@jawl/button';

declare namespace JSX {
  interface IntrinsicElements {
    "jw-button": any; // O usa un tipo más específico si lo tienes
  }
}

export function App() {
  const [count, setCount] = useState(0)

  const jwButtonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(document.querySelector('jw-button'), jwButtonRef.current);

    const jwButtonElement = jwButtonRef.current;
    const handleClick = (event) => {
      console.log('Button clicked! Event:', event.detail); // Detalles del evento (puedes acceder a event.detail)
    };

    if (jwButtonElement) {
      jwButtonElement.addEventListener('jw-button-clicked', handleClick);
    }

    return () => {
      if (jwButtonElement) {
        jwButtonElement.removeEventListener('jw-button-clicked', handleClick);
      }
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <jw-button
          ref={jwButtonRef}
          id="my-button"
          aria-label="ohaoshf"
          data-testid="my-test"
        >
          <span slot="prefix" class="prefix">$</span>
          count is {count}
          <span slot="suffix" class="suffix">&</span>
        </jw-button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
