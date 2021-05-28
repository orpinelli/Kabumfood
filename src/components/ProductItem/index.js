import React from 'react';
import { Container, ProductPhotoArea, ProductPhoto, ProductInfoArea, ProductName, ProductPrece, ProductIngredients, ProductButtonArea, ProductBytton } from './styled';

export default ({data, onClick}) =>{
    
        const handleClick = () => {
            onClick(data);
        }

    return(
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src ={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName> {data.name} </ProductName>
                <ProductPrece> {data.price}</ProductPrece>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductBytton src = "/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}