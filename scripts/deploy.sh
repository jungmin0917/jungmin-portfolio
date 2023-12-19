#!/usr/bin/env bash

echo "> 리액트 애플리케이션 배포"

# 정적 파일들에 권한 부여
sudo chown -R www-data:www-data /home/ubuntu/app/jungmin/build

echo "> 리액트 정적 파일 권한 수정"