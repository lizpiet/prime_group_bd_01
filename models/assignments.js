var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var assignmentSchema = new Schema ({
    assignment_name: {type: String, required: true},
    student_name: {type: String, required: true},
    score: Number,
    date_completed: Date,
    created_at: Date,
    updated_at: Date

});

assignmentSchema.pre('save', function(next){
    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at){
        this.created_at = currentDate;
    }
    next();
});

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;