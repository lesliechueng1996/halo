import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {
  onClick: () => void;
};

function SearchButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="blue-button">
      <MagnifyingGlassIcon className="w-4 h-4" />
      <span>搜索</span>
    </button>
  );
}

export default SearchButton;
