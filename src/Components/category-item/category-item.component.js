import './category-item.style.scss';

const CategoryItem =( { category} ) =>{
    const {imageUrl, title } = category;
    return (
        <div className = "categories-container">
          <div 
          className = "category-container"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}>
            <div className = "category-body-container">
              <h2> {title} </h2>
             <p> Shop now </p>
            </div>
            </div>
     </div>
          );
    };
export default CategoryItem;