import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>
            ARIOW R is a creative studio turning bold ideas into stories,
            experiences, and visual worlds that stay with you.
          </h2>
          <p>
            We blend imagination, strategy, and craft to make work that feels
            alive. From the first spark to the final detail, we build creative
            that connects, surprises, and gives brands a voice of their own.
          </p>
        </TextWrapper>
        <ServicesWrapper>
          <h3>Services</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex)}
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? '100%' : '0' }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map((service, serviceIndex) => (
                  <p key={`${itemIndex}_${serviceIndex}`}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
