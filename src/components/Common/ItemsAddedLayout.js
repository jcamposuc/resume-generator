import React from 'react';
import ItemActions from './ItemActions';

const ItemsAddedLayout = ({ items, Comp, handleEdit, handleRemove }) => {
    return (
        items?.map((item, index) => (
            <div key={`experience=${index}`} className='mb-5'>
                {Comp(item)}
                <ItemActions
                    edit={handleEdit}
                    remove={handleRemove}
                    obj={item}
                    index={index}
                />
            </div>
        ))
    );
};

export default ItemsAddedLayout;