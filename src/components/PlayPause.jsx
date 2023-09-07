import { FaPause, FaPlay} from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay, size}) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPause 
      size={size}
      className='text-gray-300 text-opacity-50'
      onClick={handlePause}
    />
  ) : (
    <FaPlay 
      size={size}
      className='text-gray-300 text-opacity-50'
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
