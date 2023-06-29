import { ForwardedRef, useRef } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

type Props = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

function Search({ placeholder, onSearch }: Props) {
  const inputRef: ForwardedRef<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-3">
      <SearchInput placeholder={placeholder} ref={inputRef} />
      <SearchButton
        onClick={() => onSearch(inputRef.current!.value)}
      ></SearchButton>
    </div>
  );
}

export default Search;
