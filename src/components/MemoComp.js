import React from 'react'

function MemoComp({name}) {
    console.log('Memo Component');
    return (
        <div>
            
        </div>
    )
}

export default React.memo(MemoComp)
