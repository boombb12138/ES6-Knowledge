
// 1.导出方式一
// import { timeFormat, priceFormat } from "./utils/format";
// import { add, sub } from "./utils/math";

// export {
//     timeFormat, priceFormat, add, sub
// }

// 2.导出方式二
// export { timeFormat, priceFormat } from "./format.js";
// export { add, sub } from "./math.js";

// 3.导出方式三
export * from './format.js'
export * from './math.js'