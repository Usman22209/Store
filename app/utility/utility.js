// utility.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/**
 * Get percentage width based on viewport width (screen width).
 * @param {number} percentage - The percentage of the viewport width (e.g., 50 for 50%).
 * @returns {number} - Calculated width in pixels.
 */
export const vw = (percentage) => (width * percentage) / 100;


export const vh = (percentage) => (height * percentage) / 100;

/**
 * Get percentage based on the smaller of viewport width or height.
 * Useful for scaling elements proportionally.
 * @param {number} percentage - The percentage of the smaller viewport dimension.
 * @returns {number} - Calculated size in pixels.
 */
export const vmin = (percentage) => (Math.min(width, height) * percentage) / 100;

/**
 * Get percentage based on the larger of viewport width or height.
 * Useful for scaling elements proportionally.
 * @param {number} percentage - The percentage of the larger viewport dimension.
 * @returns {number} - Calculated size in pixels.
 */
export const vmax = (percentage) => (Math.max(width, height) * percentage) / 100;
