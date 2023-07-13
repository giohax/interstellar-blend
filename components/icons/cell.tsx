export default function IconCell({className}:{className?:string}) {
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M8 4L4 6v5l4 2 4-2V6zM12 11l4 2 4-2V6l-4-2-4 2M8 13v5l4 2 4-2v-5" />
      </svg>
    );
  }