import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ForwardedRef, forwardRef } from 'react';

type Props = {
  placeholder?: string;
};

const SearchInput = forwardRef(function SearchInput(
  { placeholder }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute w-4 h-4 left-3 top-1/2 -mt-2" />
      <input
        className="border border-neutral-300 py-2 rounded-sm pl-8 text-xs focus:border-sky-500 outline-none hover:border-neutral-400"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default SearchInput;
