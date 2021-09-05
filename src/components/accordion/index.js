import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import './style.scss'
const AccordionComp = ({ data }) => {
  return (
    <Accordion allowZeroExpanded>
      {data.map((item, idx) => (
        <AccordionItem key={idx}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.name}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.name}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionComp
