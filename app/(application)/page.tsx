import AppBanner from '@/components/application/AppBanner';
import ArticleList from '@/components/application/ArticleList';
import LabelPanel from '@/components/application/LabelPanel';
import LatestComment from '@/components/application/LatestComment';
import MySelf from '@/components/application/MySelf';
import NoticePanel from '@/components/application/NoticePanel';
import RecommendBanner from '@/components/application/RecommendBanner';
import WebInfor from '@/components/application/WebInfor';

export default function Home() {
  return (
    <main className="space-y-10 pb-10 pt-10">
      <AppBanner />
      <RecommendBanner />
      <div className="bg-background p-5 rounded-2xl flex items-start gap-5">
        <ArticleList />
        <div className="hidden lg:flex flex-col space-y-10">
          <MySelf className="pt-20" />
          <LatestComment />
          <LabelPanel />
          <NoticePanel />
          <WebInfor />
        </div>
      </div>
    </main>
  );
}
