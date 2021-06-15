
export default function opacityLevel (contributionLevel) {
    switch(contributionLevel) {
        case 'FIRST_QUARTILE':
            return 0.25;
        case 'SECOND_QUARTILE':
            return 0.5;
        case 'THIRD_QUARTILE':
            return 0.75;
        case 'FOURTH_QUARTILE':
            return 1;
        default:
            return 0;
    }
}