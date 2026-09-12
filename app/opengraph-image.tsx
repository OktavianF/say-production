import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: 80, fontWeight: 900, marginBottom: 10, color: '#f97316' }}>SAY PRODUCTION</h1>
          <p style={{ fontSize: 32, fontWeight: 700, color: '#22d3ee', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Best Documentation</p>
        </div>
        <div style={{ display: 'flex', marginTop: 80, fontSize: 36, color: '#e2e8f0', textAlign: 'center', padding: '0 80px', lineHeight: 1.4 }}>
          Jasa Dokumentasi Profesional untuk Wedding, Prewedding, dan Event di Lamongan
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
