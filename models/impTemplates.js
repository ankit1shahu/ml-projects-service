var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var impTemplatesModel = mongoose.model('impTemplates', new mongoose.Schema({
    title: String,
    externalId:{ 
        type : String ,
         unique : true, 
         required : true
    },
    organisation: String,
    duration: String,
    difficultyLevel: String,
    goal: String,
    concepts: Array,
    keywords: Array,
    status:String,
    primaryAudience: Array,
    rationale: String,
    recommendedFor: String,
    risks: String,
    protocols: String,
    tasks:Array,
    // originalAuthor:OriginalAuthor,
    createdAt: Date,
    createdBy: String,
    vision: String,
    problemDefinition:String,
    prerequisites:String,
    assumptions:String,
    resources:Array,
    supportingDocuments:Array,
    approaches:String,
    successIndicators:String,
    suggestedProject:String,
    creationType:String,
    category:Array,
}, { collection: 'impTemplates' }));
module.exports = impTemplatesModel;