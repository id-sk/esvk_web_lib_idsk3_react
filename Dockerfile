FROM httpd:bullseye

COPY storybook-static/ /usr/local/apache2/htdocs/
