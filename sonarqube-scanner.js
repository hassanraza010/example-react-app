const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://10.0.3.206:9000",
        token: "2a81d074ef1701dbc78e75e30576daac30e46a1a",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
