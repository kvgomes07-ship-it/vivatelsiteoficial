import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'VIVATEL - Infraestrutura Digital Soberana'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #001219, #003049)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '20px',
        }}>
           {/* Logo Simulado via SVG no preview */}
           <svg width="200" height="200" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L16 24L24 8" stroke="#3B82F6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12C12 12 14 11 16 11C18 11 20 12 20 12" stroke="#22D3EE" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div style={{
            fontSize: '120px',
            fontWeight: 'bold',
            letterSpacing: '-0.05em',
            marginLeft: '40px'
          }}>VIVATEL</div>
        </div>
        
        <div style={{
          fontSize: '48px',
          color: '#22D3EE',
          marginTop: '60px',
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: '1.4'
        }}>
          Infraestrutura Digital Soberana para Angola
        </div>

        {/* Decorativo */}
        <div style={{
          position: 'absolute',
          bottom: '40',
          left: '40',
          fontSize: '24px',
          color: 'rgba(255,255,255,0.3)'
        }}>
          vivatelsiteoficial.vercel.app
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
