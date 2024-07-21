import mongoose, {Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema({  
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  duration:{
    type: Number,
    required: true,
  },
  views:{
    type: Number,
    default: 0,
  },
  isPublished:{
    type: Boolean,
    default: true,
  },
  thumbnail:{
    type: String, //cloudinary url
    required: true,
  },
  videoFile:{
    type: String, //cloudinary url
    required: true,
  },
}, {
  timestamps: true,
});

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema)