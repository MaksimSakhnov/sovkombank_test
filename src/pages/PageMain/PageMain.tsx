import SideBarContainer from 'containers/SideBarContainer';

export function PageMain() {
  return (
    <div className={'w-full h-full justify-between flex mt-5 px-5'}>
      <SideBarContainer withFilters={false} />
      <div className={'basis-1/2'}></div>
    </div>
  );
}
