'use client';

import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import MySelf from '@/components/MySelf';
import Comment from '@/components/Comment';
import {
  BookOpenIcon,
  BackwardIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  content: string;
  className?: string;
};

function AboutItem({ title, content, className }: Props) {
  return (
    <div className={className}>
      <div className="text-2xl font-bold text-label mb-1">{title}</div>
      <div className="w-24 h-1 gradient-bg mb-5" />
      <p className="text-content-main">{content}</p>
    </div>
  );
}

function AboutPage() {
  const personInfoRef = useRef<HTMLDivElement>(null);
  const mainProgramRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

  const personInfoInView = useInView(personInfoRef);
  const mainProgramInView = useInView(mainProgramRef);
  const contactInfoInView = useInView(contactInfoRef);

  const router = useRouter();

  const jumpTo = (ref: React.RefObject<HTMLDivElement>) => () =>
    ref.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

  return (
    <div className="pt-5">
      <BreadcrumbTitle title="关于" className="mb-5" />
      <div className="flex items-start gap-5">
        <div className="grow">
          <div className="bg-background rounded-2xl px-14 py-20 space-y-12 mb-10">
            <div ref={personInfoRef}>
              <AboutItem
                title="个人介绍"
                content="这个人很懒，什么也没有留下"
              />
            </div>
            <div ref={mainProgramRef}>
              <AboutItem
                title="主要编程语言"
                content="Java / JavaScript / TypeScript / Dart"
              />
            </div>
            <div ref={contactInfoRef}>
              <AboutItem
                title="联系方式"
                content="QQ: 123456789 / WeChat: 123456789"
              />
            </div>
          </div>

          <div ref={commentRef}>
            <Comment />
          </div>
        </div>
        <div className="hidden lg:block shrink-0">
          <MySelf className="mb-5" />

          <div className="bg-background p-10 rounded-2xl mb-3">
            <div className="flex items-center gap-3 text-label">
              <BookOpenIcon className="h-6 w-6" />
              <h3 className="text-xl">文章目录</h3>
            </div>
            <div className="w-16 h-1 gradient-bg mb-5" />
            <div className="text-content-main space-y-3">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={jumpTo(personInfoRef)}
              >
                <div className="w-2 h-2 rounded-full bg-label-colorful" />
                <span className={personInfoInView ? 'text-label-colorful' : ''}>
                  个人介绍
                </span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={jumpTo(mainProgramRef)}
              >
                <div className="w-2 h-2 rounded-full bg-label-colorful" />
                <span
                  className={
                    !personInfoInView && mainProgramInView
                      ? 'text-label-colorful'
                      : ''
                  }
                >
                  主要编程语言
                </span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={jumpTo(contactInfoRef)}
              >
                <div className="w-2 h-2 rounded-full bg-label-colorful" />
                <span
                  className={
                    !personInfoInView && !mainProgramInView && contactInfoInView
                      ? 'text-label-colorful'
                      : ''
                  }
                >
                  联系方式
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl flex items-center gap-1 text-content-main overflow-hidden">
            <div
              className="w-full flex justify-center items-center bg-background py-5 cursor-pointer"
              onClick={() => router.back()}
            >
              <BackwardIcon className="w-8 h-8" />
            </div>
            <div
              className="w-full flex justify-center items-center bg-background py-5 cursor-pointer"
              onClick={() => scrollTo(0, 0)}
            >
              <RocketLaunchIcon className="w-8 h-8 -rotate-45" />
            </div>
            <div
              className="w-full flex justify-center items-center bg-background py-5 cursor-pointer"
              onClick={() => jumpTo(commentRef)}
            >
              <ChatBubbleLeftRightIcon className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
