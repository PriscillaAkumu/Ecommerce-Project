const Categories = () => {
  return (
    <>
      <div className='blog__side__bar__categories'>
        <h3 className='blog__side__bar__categories__heading'>Categories</h3>
        <ul className='blog__side__bar__categories__item'>
          <div>
            <li className='blog__side__bar__categories__item__name'>Wood</li>
            <p className='categories_count'>2</p>
          </div>
          <div>
            <li className='blog__side__bar__categories__item__name'>Design</li>
            <p className='categories_count'>8</p>
          </div>
          <div>
            <li className='blog__side__bar__categories__item__name'>Handmade</li>
            <p className='categories_count'>7</p>
          </div>
          <div>
            <li className='blog__side__bar__categories__item__name'>Interior</li>
            <p className='categories_count'>1</p>
          </div>
          <div>
            <li className='blog__side__bar__categories__item__name'>Wood</li>
            <p className='categories_count'>6</p>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Categories;
