##Edit serenity.properties file to include these properties:
```
webdriver.driver=remote
webdriver.remote.url=http://localhost:4444/wd/hub
webdriver.remote.driver=firefox
webdriver.remote.os=LINUX
```
##Run tests:
```
$ gradle clean test aggregate --info
```
