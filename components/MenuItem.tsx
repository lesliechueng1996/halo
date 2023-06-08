import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { MenuItem } from './Menu';

type Props = {
  menu: MenuItem;
  hasChildren: boolean;
  isExpand: boolean;
  subMenu?: boolean;
  className?: string;
  onClick: (menu: MenuItem) => void;
};

function MenuItem({
  menu,
  hasChildren,
  isExpand,
  subMenu = false,
  className = '',
  onClick,
}: Props) {
  const { icon, name } = menu;
  return (
    <div
      className={`h-12 text-neutral-400 flex p-3 items-center gap-2 cursor-pointer hover:bg-black/30 ${
        subMenu && 'pl-10'
      } ${className}`}
      onClick={() => onClick(menu)}
    >
      <div className="flex-shrink-0 w-8 text-center">
        <i className={`bi bi-${icon}`} style={{ fontSize: '1rem' }}></i>
      </div>
      <span className="grow">{name}</span>
      {hasChildren && (
        <div className="flex-shrink-0">
          {isExpand ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
