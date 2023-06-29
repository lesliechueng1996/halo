import { TrashIcon } from '@heroicons/react/24/outline';

type Props = {
  onClick: () => void;
  enabled: boolean;
};

function DeleteBatchButton({ enabled, onClick }: Props) {
  return (
    <button
      disabled={!enabled}
      className="red-button disabled:cursor-not-allowed disabled:bg-red-300"
    >
      <TrashIcon className="w-4 h-4" />
      <span>批量刪除</span>
    </button>
  );
}

export default DeleteBatchButton;
