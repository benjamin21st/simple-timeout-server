# simple-timeout-server
A dead-simple timeout server for API or app development, which also uses ngrok to provide public accessible API endpoint.

## To setup:
```
npm i
node app.js
```
If everything went well, you'd see a print out like this:
```
Listening at: 8989
Public accessible URL:  https://77c954bb.ngrok.io
```

## To use:
### Example:
    ```
    https://77c954bb.ngrok.io?timeout=5000
    ```
### Explanation
    This will timeout the response by 5 seconds (5000 ms)
