const db = require('./db')
const Empolyee = require('./models/Empolyee')
const Shift = require('./models/Shift')

Empolyee.hasMany(Shift)
// Shift.belongsTo(Empolyee, {as: 'schedule'})

const syncAndSeed = async () => {
    await db.sync({force : true})

    const Empolyee1 = await Empolyee.create({
        name : 'Ranffi Ramirez',
        yearsAtJob : 3,
        picUrl : 'default-avatar.png'
    })

    const shift1 = await Shift.create({
        morning : true,
        doorman : true,
        dayOfWeek : 'Monday'
    })
    const shift2 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Monday'
    })
    const shift3 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Monday'
    })
    const shift4 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Monday'
    })
    const shift5 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Monday'
    })
    const shift6 = await Shift.create({
        morning : true,
        doorman : true,
        dayOfWeek : 'Tuesday'
    })
    const shift7 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Tuesday'
    })
    const shift8 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Tuesday'
    })
    const shift9 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Tuesday'
    })
    const shift10 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Tuesday'
    })
    const shift11 = await Shift.create({
        morning : true,
        doorman : true,
        dayOfWeek : 'Wednesday'
    })
    const shift12 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Wednesday'
    })
    const shift13 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Wednesday'
    })
    const shift14 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Wednesday'
    })
    const shift15 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Wednesday'
    })
    const shift16 = await Shift.create({
        morning : true,
        doorman : true,
        dayOfWeek : 'Thursday'
    })
    const shift17 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Thursday'
    })
    const shift18 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Thursday'
    })
    const shift19 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Thursday'
    })
    const shift20 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Thursday'
    })
    const shift21 = await Shift.create({
        morning : true,
        doorman : true,
        dayOfWeek : 'Friday'
    })
    const shift22 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Friday'
    })
    const shift23 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Friday'
    })
    const shift24 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Friday'
    })
    const shift25 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Friday'
    })
    const shift26 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Saturday'
    })
    const shift27 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Saturday'
    })
    const shift28 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Saturday'
    })
    const shift29 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Saturday'
    })
    const shift30 = await Shift.create({
        morning : true,
        desk : true,
        dayOfWeek : 'Sunday'
    })
    const shift31 = await Shift.create({
        afternoon : true,
        desk : true,
        dayOfWeek : 'Sunday'
    })
    const shift32 = await Shift.create({
        afternoon : true,
        door : true,
        dayOfWeek : 'Sunday'
    })
    const shift33 = await Shift.create({
        overnight : true,
        desk : true,
        dayOfWeek : 'Sunday'
    })
}

module.exports = {
    db,
    syncAndSeed,
    Empolyee,
    Shift
}