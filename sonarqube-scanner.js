const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "d39d6e2a9738cebf60eb49f500f2e315b3539862",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
