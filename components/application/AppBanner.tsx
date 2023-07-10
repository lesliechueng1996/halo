import CardWithTitle from './CardWithTitle';

const content =
  '1.docker概述1.1 基本介绍 Docker 是一个开源的应用容器引擎，基于Go 语言 并遵从 Apache2.0 协议开源。 Docker可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的Linux 机器上，也可以实现虚拟化。容器是完全使balabalabalabalabalabala';

function AppBanner() {
  return (
    <section className="w-full h-96 lg:h-[30rem]">
      <CardWithTitle
        tip="置顶"
        icon="trophy"
        label="DOCKER"
        labelComment="#Docker"
        title="docker入门"
        content={content}
        avatarName="花未眠"
        time="七月 28, 2022"
      />
    </section>
  );
}

export default AppBanner;
