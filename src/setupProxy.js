const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/**",
            {
                target: process.env.PORT || "http://localhost:5000",
                headers: {
                    "Connection": "keep-alive"
                }
            },
        )
    );
};
