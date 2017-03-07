/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The entry-point for the pspe resource manager web application.
*/
import express  from "express";
import path     from "path";

const application       = express();
const port              = process.env.PORT || 8000;
const publicPath        = path.join(__dirname, "public");
const staticMiddleware  = express.static(publicPath);

application.use(staticMiddleware);

application.listen(port, () => {
  console.log("PSPE Resource Manager is up-and-running on port:", port);
});
