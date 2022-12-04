import mongoose, { ObjectId } from 'mongoose';
import { Rating } from './rating.model';
import { User } from './user.model';

export interface IReview {
    user: User;
    rating: Rating;
    comment?: string;
    counsellingServiceId: ObjectId;
    dateOfUse: Date;
    dateLastUpdated: Date;
}

interface ReviewDoc extends mongoose.Document, IReview {
}

interface IReviewModel extends mongoose.Model<ReviewDoc> {
    build(attr: IReview): ReviewDoc
}

const ReviewSchema = new mongoose.Schema<ReviewDoc>({
    user: {
        type: Object,
        required: true,
        unique: true
    },
    rating: {
        type: Object,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    counsellingServiceId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    dateOfUse: {
        type: Date,
        required: true
    },
    dateLastUpdated: {
        type: Date,
        required: true
    },
});

ReviewSchema.index({ '$**': 'text' }, {name: 'search_index'});

ReviewSchema.statics.build = (attr: IReview) => {
    return new Review(attr);
};

export const Review: IReviewModel = mongoose.model<ReviewDoc,IReviewModel>('Review', ReviewSchema);

Review.on('index', error => {
    if (error) console.log(error);
});