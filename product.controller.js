exports.createprodduct = (req, res) => {
    const body = req body;
    console.log(body) 
    res.status(201).json({ success: true, message: "product created", product: "body"})
}