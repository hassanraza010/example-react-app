const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "c508c07a8a7abc3d0a3d327832087573c411c7fe",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
