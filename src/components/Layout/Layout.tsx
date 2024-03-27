import { LayoutProps } from './Layout.type';

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={'w-full bg-gray-50 pt-5 overflow-y-hidden'}
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <div className={'w-full h-auto justify-between flex px-5 gap-5 '}>
        {children}
      </div>
    </div>
  );
}
