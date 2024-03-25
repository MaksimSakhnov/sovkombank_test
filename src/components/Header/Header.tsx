import { HeaderProps } from './Header.type';

export function Header({ onStarredClick }: HeaderProps) {
  return (
    <header
      className={
        'w-full bg-blue-500 h-20 flex flex-row justify-between items-center px-5 '
      }
    >
      <h1 className={'text-3xl text-white '}>Word Keeper</h1>
      <button
        className={'text-3xl text-white hover:text-yellow-100 cursor-pointer'}
        onClick={onStarredClick}
      >
        ★ Starred Words
      </button>
    </header>
  );
}
