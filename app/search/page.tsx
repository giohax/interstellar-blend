import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import mockProducts from 'mock-db/mock-db.json';

export default async function SearchPage() {
    return (
        <Grid className="grid-cols-2 lg:grid-cols-3">
        <ProductGridItems products={mockProducts} />
        </Grid>
    )
}