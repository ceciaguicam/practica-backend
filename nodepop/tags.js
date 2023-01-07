let mandatoryTags = ['work', 'lifestyle', 'motor', 'mobile']

let advertisementTags = ['work', 'lifestyle', 'fashion']

let intersection = mandatoryTags.filter(x => advertisementTags.includes(x))

if(intersection.length > advertisementTags.length) {
    throw new Error('BROKEN')
}

console.log(intersection)

