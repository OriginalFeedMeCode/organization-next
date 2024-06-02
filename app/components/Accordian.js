import React from 'react'

const Accordian = ({ features }) => {
    return (
        <div className='w-full hidden md:block'>
            {
                features.map((item, index) => {
                    return <div key={index} className="collapse collapse-plus bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg font-medium">
                            {item.title}
                        </div>
                        <div className="collapse-content">
                            <p>{item.description}</p>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default Accordian