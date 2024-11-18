import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import './stylesheet/CreateCapsule.css'; // Import the CSS file

export default function CreateCapsule() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    recipientEmail: '',
    unlockDate: format(new Date().setMonth(new Date().getMonth() + 1), 'yyyy-MM-dd'),
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log('Capsule created:', formData);
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="create-capsule-container">
      <h1 className="create-capsule-heading">Create New Time Capsule</h1>
      
      <form onSubmit={handleSubmit} className="create-capsule-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="form-input"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="recipientEmail" className="form-label">Recipient Email</label>
          <input
            type="email"
            id="recipientEmail"
            name="recipientEmail"
            required
            className="form-input"
            value={formData.recipientEmail}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="unlockDate" className="form-label">Unlock Date</label>
          <input
            type="date"
            id="unlockDate"
            name="unlockDate"
            required
            min={format(new Date(), 'yyyy-MM-dd')}
            className="form-input"
            value={formData.unlockDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">Image (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="form-file-input"
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="form-button-cancel"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="form-button-submit"
          >
            Create Capsule
          </button>
        </div>
      </form>
    </div>
  );
}
