import React from 'react';

interface ProceedButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ProceedButton: React.FC<ProceedButtonProps> = ({ onClick, disabled }) => {
  return (
    <div className="btn-container">
      <button className="proceed-button" onClick={onClick} disabled={disabled}>
        LEAVE REVIEW
      </button>
    </div>
  );
};

export default ProceedButton;
