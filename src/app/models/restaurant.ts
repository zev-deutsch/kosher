// region Imports
import {Address} from './address';
import {Review} from './review';
// endregion

export class Restaurant {
  name: string;
  website: string;
  phone: string;
  rating: number;
  averageMealPrice: number;
  reviews: Review[];
  location: Address;

  // region Default methods
  constructor(args?) {
    if (args) {
      this.name = args.name;
      this.website = args.website;
      this.phone = args.phone;
      this.rating = args.rating;
      this.averageMealPrice = args.averageMealPrice;
      this.location = args.location;
    }
  }
  // endregion
}
