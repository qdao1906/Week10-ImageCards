import { useState } from 'react';
import ImageCard from './ImageCard';

// Data from Week 9
const images = [
  { url: 'https://picsum.photos/seed/sunset/400/300', title: 'Sunset', description: 'A beautiful sunset over the mountains.', author: 'Alice', uploadedDatetime: '2025-09-25T12:00:00' },
  { url: 'https://picsum.photos/seed/forest/400/300', title: 'Forest', description: 'A dense forest with tall trees.', author: 'Bob', uploadedDatetime: '2025-09-25T12:30:00' },
  { url: 'https://picsum.photos/seed/beach/400/300', title: 'Beach', description: 'Relaxing waves hitting the sandy beach.', author: 'Charlie', uploadedDatetime: '2025-09-25T13:00:00' },
  { url: 'https://picsum.photos/seed/city/400/300', title: 'Cityscape', description: 'Skyscrapers lighting up the night sky.', author: 'Diana', uploadedDatetime: '2025-09-25T13:30:00' },
  { url: 'https://picsum.photos/seed/desert/400/300', title: 'Desert', description: 'Golden sands stretching into the horizon.', author: 'Ethan', uploadedDatetime: '2025-09-25T14:00:00' },
  { url: 'https://picsum.photos/seed/river/400/300', title: 'River', description: 'A calm river flowing through the valley.', author: 'Fiona', uploadedDatetime: '2025-09-25T14:30:00' },
];

function App() {
  // Requirement: Two useState to keep track of global like & dislike
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalDislikes, setTotalDislikes] = useState(0);

  // Requirement: Functions to update global state
  const handleGlobalLike = () => {
    setTotalLikes(totalLikes + 1);
  };

  const handleGlobalDislike = () => {
    setTotalDislikes(totalDislikes + 1);
  };

  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '20px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <div style={appStyle}>
      {/* Requirement: Header section displaying global counts */}
      <div style={headerStyle}>
        <h1 style={{color: '#2c3e50'}}>Image Gallery</h1>
        <div style={{fontSize: '1.2rem', marginTop: '10px'}}>
          <span style={{marginRight: '20px'}}>👍 Total Likes: <strong>{totalLikes}</strong></span>
          <span>👎 Total Dislikes: <strong>{totalDislikes}</strong></span>
        </div>
      </div>

      <div style={gridStyle}>
        {images.map((img) => (
          <ImageCard
            key={img.title}
            url={img.url}
            title={img.title}
            description={img.description}
            author={img.author}
            uploadedDatetime={img.uploadedDatetime}
            // Passing the functions down to the component
            onLike={handleGlobalLike}
            onDislike={handleGlobalDislike}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
