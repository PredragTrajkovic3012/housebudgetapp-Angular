const PROXY_CONFIG = [
  {
    context: [
      "/api/**",
    ],
    // target: "http://localhost:8803",
    // target: "http://localhost:8080",
    target: 'http://localhost:8888',
    // target: "http://10.81.18.41:8803",
    // target: "http://staging.one.telmekom.net",
    secure: false,
    changeOrigin: true,
    // logLevel: "debug"
  },
];

module.exports = PROXY_CONFIG;
