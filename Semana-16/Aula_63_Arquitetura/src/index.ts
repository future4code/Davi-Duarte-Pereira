import { Print, PhotoSize, PaperType } from "./business/entities/Print";
import { FrameType, FrameColor, Frame, BorderSize } from "./business/entities/Frame";
import { Order } from "./business/entities/Order";


const photo = new Print(PhotoSize["30x30"], PaperType.Resinado);

const frame = new Frame(FrameColor.amarela, FrameType.Classica, BorderSize.Grande);

const order = new Order(photo, frame);

console.log(order.calculateOrder().toFixed(2));