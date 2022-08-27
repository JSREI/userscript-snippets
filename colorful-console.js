const valueStyle = `color: black; background: #E50000; font-size: 12px; font-weight: bold;`;
const normalStyle = `color: black; background: #FF6766; font-size: 12px;`;

const message = [

    normalStyle,
    " colorful output, ",

    valueStyle,
    ` value `,

    // ...(() => {
    //     if (!cookieValue) {
    //         return [];
    //     }
    //     return [
    //         normalStyle,
    //         ", value = ",
    //
    //         valueStyle,
    //         `${cookieValue}`,
    //     ];
    // })(),

];
console.log(genFormatArray(message), ...message);

function genFormatArray(messageAndStyleArray) {
    const formatArray = [];
    for (let i = 0, end = messageAndStyleArray.length / 2; i < end; i++) {
        formatArray.push("%c%s");
    }
    return formatArray.join("");
}