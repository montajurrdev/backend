const env = require("./src/config/env")

const app = require("./src/app");

const PORT = env.port || 3000

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
});
