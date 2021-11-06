"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morganMiddleware_1 = __importDefault(require("./config/morganMiddleware"));
const logger_1 = __importDefault(require("./lib/logger"));
const DataBase_config_1 = __importDefault(require("./config/DataBase.config"));
const modules_model_1 = __importDefault(require("./model/modules.model"));
DataBase_config_1.default.addModels([modules_model_1.default]);
const app = (0, express_1.default)();
const port = 8080; // default port to listen
app.use(morganMiddleware_1.default);
// define a route handler for the default home page
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb")));
app.get("/index", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb/index.html"));
});
app.get("/api", (req, res) => {
    logger_1.default.debug("api");
    res.sendStatus(200);
    modules_model_1.default.create({ name: "test" }).then(r => {
        logger_1.default.debug(JSON.stringify(r));
    });
});
// start the Express server
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield DataBase_config_1.default.authenticate();
        yield DataBase_config_1.default.sync({ force: false });
        logger_1.default.info('Connection has been established successfully.');
    }
    catch (error) {
        logger_1.default.error('Unable to connect to the database:', error);
    }
    logger_1.default.info(`server started at http://localhost:${port}`);
}));
app.get("/DabSettings", (req, res) => {
    res.status(200);
});
app.get("/GeneralSettings", (req, res) => {
    res.status(200);
});
app.get("/YtbSettings", (req, res) => {
    res.status(200);
});
//# sourceMappingURL=server.js.map