ARG UBUNTU_VERSION=22.04
ARG BUN_VERSION=1.1.21

FROM oven/bun:${BUN_VERSION} as build
# FROM ubuntu:${UBUNTU_VERSION} AS build
ARG UBUNTU_PORTS="free.nchc.org.tw"
RUN sed -i.org -e "s|ports.ubuntu.com|${UBUNTU_PORTS}|g" /etc/apt/sources.list
RUN \
  --mount=type=cache,target=/var/lib/apt,sharing=locked \
  --mount=type=cache,target=/var/cache/apt,sharing=locked \
  apt-get update && apt-get install -y git clang build-essential lld libopenblas-dev unzip zip wget

WORKDIR /app
RUN wget https://github.com/HiraokaTakuya/get_suisho5_nn/raw/master/suisho5_nn/nn.bin
RUN wget https://github.com/yaneurao/YaneuraOu/releases/download/BOOK-700T-Shock/700T-shock-book.zip
RUN unzip 700T-shock-book.zip
RUN git clone https://github.com/yaneurao/YaneuraOu
WORKDIR /app/YaneuraOu/source
RUN make clean tournament TARGET_CPU=OTHER YANEURAOU_EDITION=YANEURAOU_ENGINE_NNUE COMPILER=clang++

FROM oven/bun:${BUN_VERSION}

WORKDIR /home/bun/app
# 一時ディレクトリにコピーする
COPY --from=build --chown=bun:bun /app/nn.bin /home/engine/eval/nn.bin
COPY --from=build --chown=bun:bun /app/user_book1.db /home/engine/book/user_book1.db
COPY --from=build --chown=bun:bun /app/YaneuraOu/source/YaneuraOu-by-gcc /home/engine/YaneuraOu

USER bun
CMD ["/bin/zsh"]
