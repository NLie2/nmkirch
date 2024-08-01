import React, { useState } from 'react';

export default function CVSection({ heading, Timeline, information, reverse, toggleExpand = false }) {
  const entries = reverse ? Object.entries(Timeline).reverse() : Object.entries(Timeline);
  const initialExpanded = entries.reduce((acc, [date], index) => {
    acc[date] = toggleExpand && index === 0;
    return acc;
  }, {});
  const [expanded, setExpanded] = useState(initialExpanded);

  const toggleExpandHandler = (date) => {
    setExpanded((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  return (
    <div className="CV_section">
      <h1>{heading}</h1>
      {entries.map(([date, details]) => (
        <div key={date} className="timeline-entry">
          <h3 onClick={() => toggleExpandHandler(date)} style={{ cursor: 'pointer' }}>
            {date} : <strong>{details.title}</strong> <span>{expanded[date] ? '▼' : '▶'}</span>
          </h3>
          {expanded[date] && (
            <ul>
              {details.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {information && <p>{information}</p>}
    </div>
  );
}
