FROM centos:8
LABEL maintainer="admin@chop3.net"
COPY files/main /usr/share/nestjs/main
COPY files/setup_22.x /tmp/setup_22.x
RUN <<EOF
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
yum update -y
/bin/bash /tmp/setup_22.x
yum install -y nodejs
yum install -y gcc-c++ make
yum install -y cronie && yum clean all
yum install -y nano
yum install -y nc
mkdir -p /usr/share/nestjs/main
npm install pm2@latest -g
pm2 install pm2-logrotate
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 1800
pm2 startup systemd
env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root
mkdir -p /usr/share/temp/log
mkdir -p /usr/share/temp/tmp
mkdir -p /usr/share/temp/public
chmod 775 -R /usr/share/temp/
cd /usr/share/nestjs/main
npm install
pm2 start dist/main.js --name chopchop-back
pm2 save
EOF
WORKDIR /usr/share/nestjs/main
VOLUME ["/temp"]
CMD ["/usr/sbin/init"]
