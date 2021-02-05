import React from 'react';

const Component = (props) => {
    const seeex = props.dialogData.map(item => (<div>{item.id}={item.name}</div>))
    return (
        <div>
            {seeex}
        </div>
    )
}

export default Component;