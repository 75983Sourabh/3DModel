export default function App() {
  return (<>
    <div style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#f8f8f8' }}>
      <h2 style={{ padding: '1rem' }}>Preview Door in AR</h2>

   <model-viewer
  src="/dor.glb"
  ar
  ar-modes="webxr scene-viewer quick-look"
  ar-placement="auto"
  camera-controls
  auto-rotate
  autoplay
  animation-name="rotate"
  shadow-intensity="1"
  tone-mapping="neutral"
  poster="/poster.png"
  style={{ width: '100%', height: '500px' }}
>
  <button
    slot="ar-button"
    style={{
      padding: '12px 24px',
      fontSize: '16px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      marginTop: '10px',
    }}
  >
    View in your space
  </button>
</model-viewer>

    </div>
 
</>
  );
}
