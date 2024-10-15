FROM codercom/code-server:latest

USER root

COPY flask_server.py /home/coder/flask_server.py

RUN apt-get update && apt-get install -y python3-pip python3-venv supervisor

RUN python3 -m venv /home/coder/venv
RUN /home/coder/venv/bin/pip install flask requests

# Supervisor 로그 디렉터리 생성
RUN mkdir -p /var/log/supervisor

# Supervisor 설정 파일 복사
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY start.sh /home/coder/start.sh
RUN chmod +x /home/coder/start.sh

ENTRYPOINT ["/bin/bash", "/home/coder/start.sh"]