import React from 'react';

const ChipList = ({ chips, maxChipsDisplayed, maxTextLength }) => {
const displayedChips = chips.slice(0, maxChipsDisplayed);

return (
    <div className="chip-list">
    {displayedChips.map((chip, index) => (
        <div key={index} className="chip">
        {chip.label.length > maxTextLength
            ? chip.label.slice(0, maxTextLength) + '...'
            : chip.label}
        </div>
    ))}
    </div>
);
};

export default ChipList;