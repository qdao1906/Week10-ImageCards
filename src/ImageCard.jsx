import { useState } from 'react';

function ImageCard({ url, title, description, author, uploadedDatetime, onLike, onDislike }) {
  
  // 1. STATE for local likes/dislikes
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // 2. STATE for comments
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  // --- Handlers ---
  const handleLike = () => {
    setLikes(likes + 1); // Update local number
    onLike();            // Update global number
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    onDislike();
  };

  const handleAddComment = () => {
    if (input.trim() !== "") {
      setComments([...comments, input]); // Add text to list
      setInput(""); // Clear text box
    }
  };

  // --- Styles ---
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center', // Requirement: Everything is centered
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const imageStyle = { width: '100%', height: '200px', objectFit: 'cover' };
  
  const buttonStyle = {
    margin: '0 10px',
    padding: '8px 15px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff9c4' // Light yellow like the demo
  };

  return (
    <div style={cardStyle}>
      <img src={url} alt={title} style={imageStyle} />
      
      <h2 style={{margin: '10px 0', color: '#2c3e50'}}>{title}</h2>
      <p style={{color: '#555'}}>{description}</p>
      
      <div style={{fontSize: '0.9rem', color: '#888'}}>
        <p><strong>Author:</strong> {author}</p>
        <p>{uploadedDatetime}</p>
      </div>

      {/* Like & Dislike Section */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={handleLike} style={buttonStyle}>
          👍 {likes}
        </button>
        <button onClick={handleDislike} style={buttonStyle}>
          👎 {dislikes}
        </button>
      </div>

      {/* Comment Input Section */}
      <div style={{display: 'flex', gap: '5px', marginTop: '10px'}}>
        <input 
          type="text" 
          placeholder="Add a comment" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{padding: '5px', flex: 1, border: '1px solid #ccc'}}
        />
        <button onClick={handleAddComment} style={{padding: '5px 10px', fontWeight: 'bold'}}>
          Add
        </button>
      </div>

      {/* Requirement: Comments listed with unordered list */}
      {comments.length > 0 && (
        <ul style={{textAlign: 'left', marginTop: '10px', paddingLeft: '20px', color: '#333'}}>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ImageCard;