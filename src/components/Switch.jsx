import React, { useState } from "react";
import styled from "styled-components";

const Switch = ({ onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
    if (onChange) onChange(!isActive); // parent component e notify করতে চাইলে
  };

  return (
    <StyledWrapper>
      <div className="neo-toggle-container">
        <input
          className="neo-toggle-input"
          id="neo-toggle"
          type="checkbox"
          checked={isActive}
          onChange={handleToggle}
        />
        <label className={`neo-toggle ${isActive ? "neo-activated" : ""}`} htmlFor="neo-toggle">
          <div className="neo-track">
            <div className="neo-background-layer" />
            <div className="neo-grid-layer" />
            <div className="neo-spectrum-analyzer">
              <div className="neo-spectrum-bar" />
              <div className="neo-spectrum-bar" />
              <div className="neo-spectrum-bar" />
              <div className="neo-spectrum-bar" />
              <div className="neo-spectrum-bar" />
            </div>
            <div className="neo-track-highlight" />
          </div>

          <div className="neo-thumb">
            <div className="neo-thumb-ring" />
            <div className="neo-thumb-core">
              <div className="neo-thumb-icon">
                <div className="neo-thumb-wave" />
                <div className="neo-thumb-pulse" />
              </div>
            </div>
          </div>

          <div className="neo-gesture-area" />

          <div className="neo-interaction-feedback">
            <div className="neo-ripple" />
            <div className="neo-progress-arc" />
          </div>

          <div className="neo-status">
            <div className="neo-status-indicator">
              <div className="neo-status-dot" />
              <div className="neo-status-text">
                {isActive ? "ACTIVE" : "STANDBY"}
              </div>
            </div>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* (Same CSS as before, no changes needed) */
  /* ... copy all your previous CSS here ... */
`;

export default Switch;
