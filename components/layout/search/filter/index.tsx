import { SortFilterItem } from 'lib/constants';
import PathFilterItem from './item';
import { Category } from 'lib/types';
import FilterItemDropdown from './dropdown';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };


function FilterItemList({list}: {list: Category[]}) {
    return (
      <div className="hidden md:block">
        {list.map((item, i) => (
          <PathFilterItem key={i} item={item}/>
        ))}
      </div>
    );
  }
  

export default function FilterList({list, title }: { list: Category[]; title: string }) {
    return (
        <>
            <nav className="col-span-2 w-full flex-none px-0 md:px-6 py-2 md:py-4 md:pl-10">
                <h3 className="hidden font-semibold text-white md:block">{title}</h3>
                <ul className="hidden md:block">
                    <FilterItemList list={list} />
                </ul>
                <ul className="md:hidden">
                  <FilterItemDropdown list={list} />
                </ul>
            </nav>
        </>
    )
}