const scanner = require("sonarqube-scanner");
scanner(
    {
        serverUrl: "http://localhost:9000",
        login: "admin",
        password: "9025143828@jeni",
        options: {
            "sonar.sources": "./src",
        },
    },
    () => process.exit()
);