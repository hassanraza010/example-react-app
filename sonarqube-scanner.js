const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "ca79a347568b1bdc42bfc39eec3bd28543552e07",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
