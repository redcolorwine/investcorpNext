export const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
export const textAnimation2 = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
export const textAnimation3 = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
export const textAnimation4 = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
export const textAnimation5 = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}
export const textAnimation6 = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

