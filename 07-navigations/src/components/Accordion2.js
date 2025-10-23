import React, { useState } from 'react'
import { MdArrowRight } from 'react-icons/md';

const Accordion2 = ({items}) => {

    const [expandedIndex , setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if(nextIndex == expandedIndex){
            setExpandedIndex(-1);
        }
        else{
            setExpandedIndex(nextIndex);
        }
    }
    const renderedItems = items.map((item , index) => {
        const isExpanded = expandedIndex === index;


        const content = isExpanded && <div className='border-b p-3'>{item.content}</div>
        return (
            <div key={item.id}>
                <div className='flex p-3 items-center border-b bg-gray-50 cursor-pointer' onClick={() => handleClick(index)}>{item.label}<MdArrowRight/></div>
                <div>{content}</div>
            </div>
        )
        
    }) 

  return (
    <div className='border-x border-t '>
        {renderedItems}
    </div>
  )
}

export default Accordion2;