import mongoose from 'mongoose';
import { Rating } from './rating.model';
import { User } from './user.model';

export interface IReview {
    user: User;
    rating: Rating;
    comment?: string;
    counsellingServiceId: string;
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
        type: String,
        required: true
    },
    dateOfUse: {
        type: Date,
        default: undefined,
        required: true
    },
    dateLastUpdated: {
        type: Date,
        default: undefined,
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