const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "9b911bbc68a2c90e904eff1104a17e789e0e0166",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
