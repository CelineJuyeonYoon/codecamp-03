FROM node:16
# 내컴퓨터의 모든 파일들이 도커컴퓨터에 해당 이름으로 복붙됨
WORKDIR /class_build/
# 처음 시작할 때 커서 위치할 곳 설정
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr

CMD yarn start
