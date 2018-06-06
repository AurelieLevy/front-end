FROM kyma/docker-nginx
COPY app/ /var/www
CMD 'nginx'
