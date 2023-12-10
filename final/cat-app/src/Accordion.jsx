import { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        onClick={toggleAccordion}
      >
        Toggle Accordion
      </button>
      <div
        id="accordion-content"
        aria-hidden={!isOpen}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {/* Accordion Content Goes Here */}
        <p>This is the content of the accordion.</p>
      </div>
    </div>
  );
};

export default Accordion;
