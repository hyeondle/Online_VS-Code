FROM codercom/code-server:latest

# Root 권한으로 변경
USER root

# Flask 앱 복사
COPY flask_server.py /home/coder/flask_server.py

# Python 및 virtualenv 설치, Supervisor 설치
RUN apt-get update && apt-get install -y python3-pip python3-venv supervisor

# 가상 환경 생성
RUN python3 -m venv /home/coder/venv

# 가상 환경 활성화 및 패키지 설치
RUN /home/coder/venv/bin/pip install flask requests

# Supervisor 로그 디렉터리 생성
RUN mkdir -p /var/log/supervisor

# Supervisor 설정 파일 복사
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# 쉘 스크립트 복사 및 실행 권한 부여
COPY start.sh /home/coder/start.sh
RUN chmod +x /home/coder/start.sh

# 쉘 스크립트 실행
ENTRYPOINT ["/bin/bash", "/home/coder/start.sh"]
