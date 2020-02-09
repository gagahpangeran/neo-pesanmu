const { PORT } = require("./config/const");
const server = require("./server");

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
