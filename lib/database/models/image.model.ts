import { Schema, model, models } from "mongoose";


export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string; 
    width?: number;
    height?: number;
    config?: object; 
    transformationUrl?: string; 
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
      _id: string;
      firstName: string;
      lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
  }

const ImageSchema = new Schema({
    title: { type: String, required: true},
    secureUrl:{ type:URL,required:true},
    width: {type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationUrl:{type: URL},
    aspectRation :{type:String},
    color:{ type:String},
    promp:{type:String},
    author:{type: Schema.Types.ObjectId,ref:'User'},
    createdAt: {type: Date, default:Date.now},
    UpdatedAt: {type: Date, default:Date.now},

});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;