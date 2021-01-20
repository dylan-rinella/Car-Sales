export const TOGGLE_FEATURE = "TOGGLE_FEATURE";

export const toggleFeature = (featureId) => {
  return { type: TOGGLE_FEATURE, payload: featureId};
}