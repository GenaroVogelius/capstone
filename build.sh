
set -o errexit #This command sets the option errexit or e, which means that the script will exit immediately if any command returns a non-zero exit status (i.e., encounters an error). This ensures that if any of the subsequent commands fail, the script will stop executing further.

source /home/vps-3503468-x.dattaweb.com/public_html/bin/activate


git pull origin main


pip install --upgrade pip
pip install -r requirements.txt

python manage.py collectstatic --no-input

python manage.py makemigrations

python manage.py migrate

sudo systemctl restart lsws



DB_NAME=postgres
DB_USER=power_gym
DB_PASSWORD=genaro_postgresql
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=rhi262ogk32lea&on=v!5yf(5$eo8wr!8l2zk0rl^jeag3nbb^
HTTPS=https://power-gym.com.ar
CLOUD_NAME =drlw6rsyu
API_KEY =766351891783718
API_SECRET =IzIco6pLWKKSbFFL2z47CLE2ssA
EXTERNAL_HOSTNAME=power-gym.com.ar


DB_NAME=prueba_database
DB_USER=genaro
DB_PASSWORD=1048
DB_HOST=localhost
DB_PORT=5432
EXTERNAL_HOSTNAME=vps-3503468-x.dattaweb.com
HTTPS=https://vps-3503468-x.dattaweb.com
SECRET_KEY=django-insecure-5qs_r98f^%geb0z2lfojc6=@-y_sg6)qettqz&u85!a_pas2*_
CLOUD_NAME =drlw6rsyu
API_KEY =766351891783718
API_SECRET =IzIco6pLWKKSbFFL2z47CLE2ssA