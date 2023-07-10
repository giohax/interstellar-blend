import Link from "next/link";
import FilterList from './filter';

function CategoriesList() {
    const categories = [
        'All','Anti Aging and Longevity', 'Weight Loss and Metabolism Regulation', 'Energy and Stamina Boosters', 
        'Heart and Cardiovascular Health', 'Sexual Health and Fertility', 'Pain Management and Inflammation Reduction', 
        'Immune Support and Infection Control', 'Detoxification and Organ Health', 'Hair, Skin, and Dental Health',
        'Sleep and Relaxation', 'Radiation and Oxidative Stress Protection', 'Combos'
    ];
    
    const categoryObjects = categories.map(category => {
        if (category == 'All') return {
            title: category,
            path: '/search'
        }
        if (category == 'Hair, Skin, and Dental Health') return {
            title: category,
            path: '/search/hair-skin-dental-health'
        }

        return {
            title: category,
            path: `/search/${category.toLowerCase().replace(/ /g, '-')}`
        };
    });
    return <FilterList list={categoryObjects} title="Categories" />
}

export default function Categories() {
    return (
        <>
            <CategoriesList />
        </>
    )
}