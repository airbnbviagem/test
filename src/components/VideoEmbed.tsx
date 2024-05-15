import { useEffect } from 'react';

const VideoEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/8e7100ab-11ad-4448-a789-76bfb7733433/players/6642dd41d8944e000bdd8447/player.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="vid_6642dd41d8944e000bdd8447" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img
        id="thumb_6642dd41d8944e000bdd8447"
        src="https://images.converteai.net/8e7100ab-11ad-4448-a789-76bfb7733433/players/6642dd41d8944e000bdd8447/thumbnail.jpg"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        id="backdrop_6642dd41d8944e000bdd8447"
        style={{ position: 'absolute', top: 0, width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
      />
    </div>
  );
};

export default VideoEmbed;
