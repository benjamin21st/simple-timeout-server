# simple-timeout-server
A dead-simple timeout server for API or app development

## To setup:
```
npm i
node app.js
```

## To use:
### Example:
    ```
    http://localhost:8989/?timeout=5000&mockResponse=5000ms
    ```
### Explanation
    This will timeout the response by 5 seconds (5000 ms), and mock a response back saying `5000ms`
