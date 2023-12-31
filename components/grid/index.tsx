import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row  gap-4', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li
      {...props}
      className={clsx(
        'relative h-full w-full overflow-hidden transition-opacity bg-neutral-800 p-2 rounded-md',
        props.className
      )}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;
export default Grid;
