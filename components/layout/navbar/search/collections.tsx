import Link from "next/link";
import FilterList from './filter';

function CollectionList() {
    const collections = [
        'Cancer Prevention', 'Aging Prevention', 'Neurological Health', 
        'Cognitive Enhancement', 'Weight Management', 'Metabolism Improvement', 
        'Cardiovascular Health', 'Oral Health', 'Digestive Health',
        'Skin Health', 'Beauty Enhancement', 'Sleep Management', 
        'Stress Management', 'Detoxification', 'Immune System Support',
        'Physical Performance', 'Muscle Health'
    ]
    return <FilterList list={collections} title="Collections" />
}

export default function Collections() {
    return (
        <>
            <CollectionList />
        </>
    )
}