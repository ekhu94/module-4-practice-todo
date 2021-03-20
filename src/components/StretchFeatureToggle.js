import React from 'react';

const StretchFeatureToggle = ({ on, onToggleClick }) => {
    return (
        <button
            className={`toggle ${on ? 'on' : 'off'}`}
            onClick={() => onToggleClick(on)}
        >
            {on ? "Stretch features enabled" 
                : "Stretch features disabled"}
        </button>
    );
};

export default StretchFeatureToggle;