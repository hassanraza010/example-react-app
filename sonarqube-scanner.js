const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "2a81d074ef1701dbc78e75e30576daac30e46a1a",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
