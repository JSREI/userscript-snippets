/**
 * 休眠给定的毫秒数
 *
 * @param mils
 * @returns {Promise<unknown>}
 */
async function sleep(mils) {
    return new Promise((resolve) => setTimeout(resolve, mils));
}

(async () => {
    // 注意需要在async块中使用
    console.log("sleep begin")
    await sleep(3000);
    console.log("sleep end");
})();
