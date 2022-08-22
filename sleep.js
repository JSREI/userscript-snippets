/**
 * 休眠给定的毫秒数
 *
 * @param mils
 * @returns {Promise<unknown>}
 */
async function sleep(mils) {
    return new Promise((resolve) => setTimeout(resolve, mils));
}