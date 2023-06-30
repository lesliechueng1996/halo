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
        className="default-input !pl-8"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default SearchInput;
