// Compatibility shim for controllers that expect a `Blog` model.
// Reuse newsEventsModel so both names resolve to the same schema until you split them.
module.exports = require('./newsEventsModel');
