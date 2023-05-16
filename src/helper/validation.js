function isValidId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error(`id is not a num`)
    if (id < 0) throw new Error(`id is a negative`)

    next()
}

function isValidBody(req, res, next) {
    const { label, category, priority } = req.body;
    if (!label) throw new Error(`lable is not defined`)
    if (!category) throw new Error(`category is not defined`)
    if (!priority) throw new Error(`priority is not defined`)

if (!isNaN(label)) throw new Error(`label is a number`)
if (!isNaN(category)) throw new Error(`category is a number`)

    next()
}
module.exports = { isValidId, isValidBody };

