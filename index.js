const express = require('express');
const rateLimit = require('express-rate-limit')
const app = express();
const PORT = 3000;

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 1000, // limit each IP to 1000 requests per windowMs
    statusCode: 429,
    headers: true,
});
// X-RateLimit-Limit: 1000
// X-RateLimit-Remaining: 996
// X-RateLimit-Reset: 1612794363 (Unix Epoch Time)

app.use(limiter);
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));