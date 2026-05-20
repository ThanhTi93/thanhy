import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CateTypesProvider } from './contexts/CateTypesProvider.jsx'
import { ProvincesProvider } from './contexts/ProvincesProvider.jsx'
import { WardsProvider } from './contexts/WardsProvider.jsx'
import { FeaturesProvider } from './contexts/FeaturesProvider.jsx'
import { ProductsProvider } from './contexts/ProductsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CateTypesProvider>
        <ProvincesProvider>
          <WardsProvider>
            <FeaturesProvider>
              <ProductsProvider>
              <App />
              </ProductsProvider>
            </FeaturesProvider>
          </WardsProvider>
        </ProvincesProvider>
      </CateTypesProvider>
    </BrowserRouter>
  </StrictMode>,
)
