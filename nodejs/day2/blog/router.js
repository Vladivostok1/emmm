var Common = require("./common");

exports.router = function (req, res, newpath) {
    switch (newpath) {
        case "/":
            Common.getIndex(res);
            break;
        case "/img":
            Common.getImage(res);
            break;
        default:
            Common.getFault(res);
            break;
    }
}