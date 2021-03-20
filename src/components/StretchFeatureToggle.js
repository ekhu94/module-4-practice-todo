import React from 'react';

const StretchFeatureToggle = ({ on, onToggleClick }) => {
    return (
        <button
            className={`toggle ${on ? 'on' : 'off'}`}
            onClick={() => onToggleClick(on)}
        >
            {on ? "Stretch features disabled" 
                : "Stretch features enabled"}
        </button>
    );
};

export default StretchFeatureToggle;