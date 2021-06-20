"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //trazendo express
var app = express_1.default(); //jogando a funcao express em app
app.get("/", function (req, res) {
    return res.send({ ok: true });
});
app.listen(3333, function () { return console.log("Start is runing"); }); //iniciando nosso servidor
