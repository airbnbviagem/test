import { useEffect } from 'react';

const VideoEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/d01c652e-7f81-4827-a2b1-015c38fdc091/players/662ecbdcb4e1a1000bc5f56e/player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="vid_662ecbdcb4e1a1000bc5f56e" style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <img
        id="thumb_662ecbdcb4e1a1000bc5f56e"
        src="https://images.converteai.net/d01c652e-7f81-4827-a2b1-015c38fdc091/players/662ecbdcb4e1a1000bc5f56e/thumbnail.jpg"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        id="backdrop_662ecbdcb4e1a1000bc5f56e"
        style={{ position: 'absolute', top: 0, width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
      />
    </div>
  );
};

export default VideoEmbed;
