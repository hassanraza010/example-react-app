const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "bf4dd7738bb7e4d84e266919d690a7e2b42584ea",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
