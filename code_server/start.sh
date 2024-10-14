#!/bin/bash

# 로그 디렉토리 생성
mkdir -p /var/log/supervisor

# Supervisor 실행
/usr/bin/supervisord -c /etc/supervisor/supervisord.conf
