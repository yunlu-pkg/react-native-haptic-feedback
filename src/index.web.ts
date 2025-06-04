import { HapticFeedbackTypes } from "./types";
import type { HapticOptions } from "./types";

const RNHapticFeedback = {
  trigger(
    _type:
      | keyof typeof HapticFeedbackTypes
      | HapticFeedbackTypes = HapticFeedbackTypes.selection,
    _options: HapticOptions = {},
  ) {

  }
}

export * from "./types";
export const { trigger } = RNHapticFeedback;
export default RNHapticFeedback;
