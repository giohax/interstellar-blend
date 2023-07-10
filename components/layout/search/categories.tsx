import Link from "next/link";
import FilterList from './filter';

function CategoriesList() {
    const categories = [
        'Cancer Prevention', 'Aging Prevention', 'Neurological Health', 
        'Cognitive Enhancement', 'Weight Management', 'Metabolism Improvement', 
        'Cardiovascular Health', 'Oral Health', 'Digestive Health',
        'Skin Health', 'Beauty Enhancement', 'Sleep Management', 
        'Stress Management', 'Detoxification', 'Immune System Support',
        'Physical Performance', 'Muscle Health', 'Combos'
    ]
    return <FilterList list={categories} title="Categories" />
}

export default function Categories() {
    return (
        <>
            <CategoriesList />
        </>
    )
}