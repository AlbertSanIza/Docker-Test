"docker save"
docker save -o react-app.tar react-app
docker save -o dockertestapi.tar dockertestapi
"scp"
scp react-app.tar versacall@192.168.100.231:react-app.tar
scp dockertestapi.tar versacall@192.168.100.231:dockertestapi.tar
"rm"
rm react-app.tar
dockertestapi.tar
"docker load"
ssh versacall@192.168.100.231 "docker load -i react-app.tar && docker load -i dockertestapi.tar"
pause
