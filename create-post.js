"use strict";
// create-markdown.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var prompt = function (question) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            rl.close();
            resolve(answer);
        });
    });
};
var promptWithOptions = function (question, options) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question('번호를 입력하세요: ', function (answer) {
            rl.close();
            var selectedOptionIndex = parseInt(answer) - 1;
            if (selectedOptionIndex >= 0 && selectedOptionIndex < options.length) {
                resolve(options[selectedOptionIndex]);
            }
            else {
                resolve('');
            }
        });
    });
};
var createMarkdownFile = function (filename, content) {
    var postsDirectory = path.join(process.cwd(), 'posts', filename);
    fs.writeFileSync(postsDirectory, content);
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var title, category, date, tags, content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prompt('제목을 입력하세요: ')];
            case 1:
                title = _a.sent();
                return [4 /*yield*/, prompt('카테고리를 입력하세요: ')];
            case 2:
                category = _a.sent();
                return [4 /*yield*/, prompt('날짜를 입력하세요 ex) 2024-03-31')];
            case 3:
                date = _a.sent();
                return [4 /*yield*/, prompt('태그를 입력하세요: ')];
            case 4:
                tags = _a.sent();
                content = "\n  ---\n  title: \"".concat(title, "\"\n  date: \"").concat(date || new Date().toISOString().split('T')[0], "\"\n  category: \"").concat(category, "\"\n  tags: [").concat(tags, "]\n  summary: \n  pinned:\n  thumbnailUrl:\n  ---\n");
                createMarkdownFile("".concat(title.replace(/\s+/g, '-'), ".md"), content);
                return [2 /*return*/];
        }
    });
}); };
main();
