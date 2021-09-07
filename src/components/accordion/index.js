import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import './style.scss'
const AccordionComp = ({ data, renderProducts, setCategoryId }) => {
  return (
    <Accordion
      allowZeroExpanded
      // preExpanded={[categoryId]}
      onChange={(uuid) => setCategoryId(uuid[0])}
    >
      {data.map((item, idx) => {
        return (
          <AccordionItem key={item.id} uuid={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.name}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{renderProducts}</AccordionItemPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionComp
