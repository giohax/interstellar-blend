import { SortFilterItem } from 'lib/constants';
import PathFilterItem from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };


function FilterItemList({ list }: { list: string[] }) {
    return (
      <div className="hidden md:block">
        {list.map((item, i) => (
          <PathFilterItem key={i} item={item}/>
        ))}
      </div>
    );
  }
  

export default function FilterList({list, title }: { list: string[]; title: string }) {
    return (
        <>
            <nav className="col-span-2 w-full flex-none px-6 py-2 md:py-4 md:pl-10">
                <h3 className="hidden font-semibold text-black dark:text-white md:block">{title}</h3>
                <ul className="hidden md:block">
                    <FilterItemList list={list} />
                </ul>
                <ul className="md:hidden">
                    <h1>Filter Item List</h1>
                </ul>
            </nav>
        </>
    )
}