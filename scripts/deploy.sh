#!/usr/bin/env bash

echo "> 리액트 애플리케이션 배포"

# 빌드된 정적 파일의 디렉토리 경로
BUILD_DIR="/home/ubuntu/app/jungmin/build"

# Nginx가 서빙하는 디렉토리 경로
NGINX_DIR="/var/www/html"

# 정적 파일 복사
sudo cp -r "$BUILD_DIR"/* "$NGINX_DIR"

echo "> 리액트 애플리케이션 정적 파일을 nginx 디렉터리로 복사 완료"