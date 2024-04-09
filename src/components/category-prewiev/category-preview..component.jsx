import ProductCard from '../product-card/product-card.component';


import {
    CategoryPeviewContainer,
    Preview, 
    Title
} from './category-preview.jsx';


const CategoryPreview = ( {title, prodcuts}) => {
    return(

        <CategoryPeviewContainer>
            <h2>
                <Title  to={title}>{title.toUpperCase()}</Title>
            </h2>
                <Preview>
                    {prodcuts
                    .filter((_, idx ) => idx < 4 )
                    .map((prodcut) => (
                    <ProductCard key={prodcut.id} product={prodcut} />
                ))}
                </Preview>
        </CategoryPeviewContainer>
    );
};

export default CategoryPreview;