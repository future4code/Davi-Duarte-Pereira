"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Print_1 = require("./business/entities/Print");
const Frame_1 = require("./business/entities/Frame");
const Order_1 = require("./business/entities/Order");
const photo = new Print_1.Print(Print_1.PhotoSize["30x30"], Print_1.PaperType.Resinado);
const frame = new Frame_1.Frame(Frame_1.FrameColor.amarela, Frame_1.FrameType.Classica, Frame_1.BorderSize.Grande);
const order = new Order_1.Order(photo, frame);
console.log(order.calculateOrder().toFixed(2));
//# sourceMappingURL=index.js.map