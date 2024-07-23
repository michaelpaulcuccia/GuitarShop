import { Schema, model, models } from "mongoose";

const InstrumentSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    modelType: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    electric: {
      type: Boolean,
      default: true,
      required: true,
    },
    isBass: {
      type: Boolean,
      default: false,
      required: true,
    },
    numberOfStrings: {
      type: Number,
    },
    stars: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    numberAvailable: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Instrument = models.Instrument || model("Instrument", InstrumentSchema);

export default Instrument;
