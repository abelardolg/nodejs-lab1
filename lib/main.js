"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
var port = 3000;
app.use("/", express_1["default"].static("public"));
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
