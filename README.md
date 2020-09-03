##PLCC2 test project

##setup OSP utils##

npm i --save @nmg/osp-backend-utils

##**Test Websocket connection**

wscat -c "wss://flenan3f9i.execute-api.us-east-2.amazonaws.com/local?nmId=3"

**message  body:**
{"action":"message", "message":"hey this is websocket message"}
