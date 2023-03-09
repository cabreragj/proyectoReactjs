import './ItemsListContainer.css'

export const ItemsListContainer = ( {greeting} ) => {
  return (
      <div className='itemList'>
        <h2 className='itemList__title'>items</h2>
        <hr/>

        <p className='itemList__text'>{greeting}</p>
      </div>
  );
}