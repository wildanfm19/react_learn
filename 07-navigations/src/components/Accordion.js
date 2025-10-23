import React, { useState } from "react";
import { MdArrowDropDown, MdArrowForwardIos, MdArrowRight } from "react-icons/md";

const Accordion = ({ items }) => {
    const [expandedIndex , setExpandedIndex] = useState(0);

 

  const renderedItems = items.map((item  , index) => {
     const isExpanded = index === expandedIndex;
    
    const icon = <span>
        {isExpanded ? <MdArrowDropDown/> : <MdArrowRight/>}
    </span>

     const content = isExpanded && <div>{item.content}</div>
     
    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>{item.label} {icon}</div>
        {content}
      </div>
    );
  });


  return (
    <div>
        {renderedItems}
    </div>
  );
};

export default Accordion;
