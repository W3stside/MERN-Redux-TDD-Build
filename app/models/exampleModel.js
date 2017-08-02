const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: {
        type: Date,
        default: Date.now
    },
    age: {
        type: Number,
        min: 18,
        max: 65
    },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    ofArrays: [ [] ],
    ofArrayOfNumbbers: [ [Number] ],
    nested: {
        stuff: {
            type: String,
            lowercase: true,
            trim: true
        }
    }
});

//Creates model - 'Example' here will be created as all lower case 'examples' with an S in db
module.exports = mongoose.model('Example', exampleSchema);
