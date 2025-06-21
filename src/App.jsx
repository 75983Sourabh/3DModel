export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <model-viewer
        src="https://3-d-model-steel.vercel.app/door.glb"
        ios-src="/door.usdz"                    // for iOS Quick Look
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="/poster.png"
        shadow-intensity="1"
        auto-rotate
        autoplay
        style={{ width: '100%', height: '100%' }}
      >
        {/* ✅ This button will trigger camera when tapped */}
        <button slot="ar-button" style={buttonStyle}>
          View in your space
        </button>

        {/* Optional prompt */}
        <div id="ar-prompt" style={promptStyle}>
          <img
            src="https://modelviewer.dev/shared-assets/icons/hand.png"
            alt="Move phone"
            width="40"
          />
        </div>
      </model-viewer>
    </div>
  );
}

const buttonStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '12px 24px',
  fontSize: '16px',
  background: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  zIndex: 10,
};

const promptStyle = {
  position: 'absolute',
  bottom: '80px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,
};
