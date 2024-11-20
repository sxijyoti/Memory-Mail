import React from 'react';
import { Lock, Unlock, Calendar, Users, Edit, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CapsuleCard.css'; // Import the custom CSS file with Tailwind styles

export default function CapsuleCard({ capsule, onClick, onDelete }) {
  const isUnlockingSoon =
    capsule.isLocked &&
    new Date(capsule.unlockDate) - new Date() < 7 * 24 * 60 * 60 * 1000; // 7 days in ms

  const imageContent = Array.isArray(capsule.contents)
    ? capsule.contents.find((content) => content.type === 'image')
    : null; // Default to null if contents is not an array

  // Default capsule.recipients to an empty array if undefined or not an array
  const recipientsCount = Array.isArray(capsule.recipients) ? capsule.recipients.length : 0;

  

  return (
    <div
      onClick={() => onClick(capsule.id)}
      className="capsule-card"
    >
      {/* Image and Title Section */}
      <div className="capsule-image-section">
        {imageContent && (
          <img
            src={imageContent.preview}
            alt="Capsule attachment"
            className="capsule-image"
          />
        )}
        <div className="capsule-overlay" />
        <div className="capsule-text">
          <h3 className="capsule-title">{capsule.title}</h3>
          <p className="capsule-description">{capsule.description}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="capsule-details">
        {/* Lock Status */}
        <div className="capsule-lock-status">
          <div className="capsule-lock-info">
            {capsule.isLocked ? (
              <Lock className="capsule-lock-icon" />
            ) : (
              <Unlock className="capsule-unlock-icon" />
            )}
            <span className="capsule-lock-text">
              {capsule.isLocked ? 'Locked' : 'Unlocked'}
            </span>
          </div>
          {isUnlockingSoon && (
            <span className="capsule-unlock-soon">
              Unlocking Soon!
            </span>
          )}
        </div>

        {/* Unlock Date and Recipient Info */}
        <div className="capsule-info">
          <div className="capsule-date">
            <Calendar className="capsule-calendar-icon" />
            <span>{new Date(capsule.unlockDate).toLocaleDateString()}</span>
          </div>
          <div className="capsule-recipients">
            <Users className="capsule-users-icon" />
            <span>{recipientsCount} recipients</span>
          </div>
        </div>

        {/* Actions: Edit (Link) and Delete */}
        <div className="capsule-actions">
          <Link
            to={`/edit/${capsule.id}`}
            onClick={(e) => e.stopPropagation()} // Prevent card click on link click
            className="capsule-edit-link"
          >
            <Edit className="capsule-edit-icon" />
            <span>Edit</span>
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              onDelete(capsule.id);
            }}
            className="capsule-delete-button"
          >
            <Trash className="capsule-delete-icon" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
