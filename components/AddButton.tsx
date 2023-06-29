import { PlusIcon } from '@heroicons/react/24/outline';

type Props = {
  onClick: () => void;
};

function AddButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="blue-button">
      <PlusIcon className="w-4 h-4" />
      <span>新增</span>
    </button>
  );
}

export default AddButton;
