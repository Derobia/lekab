"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extension_tools_1 = require("@cognigy/extension-tools");
const sendSMSNode_1 = require("./nodes/sendSMSNode");
const lekabConnection_1 = require("./connections/lekabConnection");
exports.default = extension_tools_1.createExtension({
    nodes: [
        sendSMSNode_1.sendSMSNode
    ],
    connections: [
        lekabConnection_1.lekabConnection
    ]
});
//# sourceMappingURL=module.js.map