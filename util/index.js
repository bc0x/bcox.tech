import React from 'react';

export const getClass = (type, color) => {
  if (type === 'item') {
    return `timeline-item is-${color}`;
  }
  if (type === 'marker') {
    return `timeline-marker is-${color}`;
  }
  if (type === 'heading') {
    return `heading has-text-${color}`;
  }
};

export const addHeader = (nextDate, currentDate) => {
  const years = nextDate.getFullYear() - currentDate.getFullYear();
  if (years > 0) {
    let headers = [];
    for (let i = 0; i < years; i++) {
      headers.push(
        <header
          key={currentDate.getFullYear() + i + 1}
          className="timeline-header"
        >
          <span className="tag is-primary">
            {currentDate.getFullYear() + i + 1}
          </span>
        </header>
      );
    }
    return headers;
  }
  return null;
};
