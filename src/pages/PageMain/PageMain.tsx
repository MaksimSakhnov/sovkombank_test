import SideBarContainer from 'containers/SideBarContainer';
import WordsListContainer from 'containers/WordsListContainer';

export function PageMain() {
  return (
    <div
      className={'w-full bg-gray-50 pt-5 overflow-y-hidden'}
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <div className={'w-full h-auto justify-between flex px-5 gap-5 '}>
        <SideBarContainer withFilters={false} />

        <WordsListContainer />
      </div>
    </div>
  );
}
