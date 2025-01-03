import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import './styles/reusable.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './apollo/client.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
