import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+254728299818"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +254728299818
          </a>
          {' / '}
          <a
            className="contact-text"
            href="https://wa.me/254736785836"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +254736785836
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:rovytanui@gmail.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            rovytanui@gmail.com
          </a>
        </div>
        <address className="column contact-text">
          P. O. Box 14634 - 00800<br /> Nairobi, Kenya
        </address>
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
