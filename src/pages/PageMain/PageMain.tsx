import SideBarContainer from 'containers/SideBarContainer';
import WordsListContainer from 'containers/WordsListContainer';
import Layout from 'components/Layout';

export function PageMain() {
  return (
    <Layout>
      <SideBarContainer withFilterStarred={false} />
      <WordsListContainer />
    </Layout>
  );
}
