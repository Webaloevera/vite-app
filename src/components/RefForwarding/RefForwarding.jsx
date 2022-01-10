import React from 'react';

const  RefForwarding = React.forwardRef ((props, ref) => {
    return (
        <div ref={ref} className={'test-div'}>
             {props.children}
        </div>
    );
})

export default RefForwarding;