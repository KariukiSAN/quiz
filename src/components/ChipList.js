import React from 'react';

const truncateLabel = (label, maxLength) => {
return label.length > maxLength ? label.slice(0, maxLength) + '...' : label;
};

const ChipList = ({ chips = [], maxChipsDisplayed, maxTextLength }) => {
return (
    <div className="chip-list">
    {chips.slice(0, maxChipsDisplayed).map((chip, index) => (
        <div key={index} className="chip">
        {truncateLabel(chip.label, maxTextLength)}
        </div>
    ))}
    </div>
);
};

export default ChipList;