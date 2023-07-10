import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import mockProducts from 'mock-db/mock-db.json'

type Product = {
    handle: string;
    featuredImage: { url: string };
    title: string;
    priceRange: {
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    categories: string[];
  };
  

function getProductsByCategory(products: Product[], category: string): Product[] {
    return products.filter(product => product.categories.includes(category));
}

export default async function CategoryPage(params: { category: string }) {

    const products = getProductsByCategory(mockProducts, params.category)
    console.log(products);
    return (
        <Grid className="grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
        </Grid>
    )
}