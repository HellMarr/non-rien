import { useEffect, useState } from 'react';

interface AutoAudioProps {
  buttonText: string;
}

const AutoAudio = ({ buttonText }: AutoAudioProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const playAudio = () => {
    if (hasPlayed) return;

    const audio = new Audio('/angie.mp3');
    audio.loop = false;
    
    audio.onended = () => {
      console.log('Audio ended');
      audio.remove();
      setIsPlaying(false);
      setHasPlayed(true);
    };

    audio.onerror = (error) => {
      console.error('Error playing audio:', error);
      audio.remove();
      setIsPlaying(false);
    };

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.error('Error playing audio:', error);
        audio.remove();
        setIsPlaying(false);
      });
  };

  useEffect(() => {
    // Try to play audio when component mounts
    playAudio();

    // Add click event listener to the document
    const handleClick = () => {
      if (!isPlaying && !hasPlayed) {
        playAudio();
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isPlaying, hasPlayed]);

  const createClowns = () => {
    const clowns = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${10 + Math.random() * 10}s`,
      };
      clowns.push(
        <div key={i} className="clown" style={style}>
          🤡
        </div>
      );
    }
    return clowns;
  };

  return (
    <div>
      {!isPlaying && !hasPlayed ? (
        <button 
          onClick={playAudio}
          className="message-button"
        >
          {buttonText}
        </button>
      ) : hasPlayed && (
        <div className="clown-container">
          {createClowns()}
        </div>
      )}
    </div>
  );
};

export default AutoAudio; 