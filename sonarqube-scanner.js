const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "https://9a4715a9dadd.ngrok.io",
        token: "6a5e8a9fe4bf0fc4d0fa0da49670d3f68ff90503",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
