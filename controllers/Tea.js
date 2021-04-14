var Tea = require('../models/Tea');
// List of all Teas
exports.Tea_list = async function (req, res) {
    try {
        theTeas = await Tea.find();
        res.send(theTeas);
    }
    catch (err) {
        res.send( `{"error": ${err}}`);
        res.status(500);
    }
};
// for a specific Tea.
exports.Tea_detail = async function (req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Tea.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};
// Handle Tea create on POST.
exports.Tea_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Tea();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {Teaname:"Tea WRANGLER SPORT",enginemodel:"Intercooled Turbo Premium Unleaded I-4 2.0 L/122",price:44200}
    document.Brand = req.body.Brand;
    document.Flavour = req.body.Flavour;
    document.Cost = req.body.Cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};// Handle Tea delete form on DELETE.
exports.Tea_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Tea.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Tea update form on PUT.
exports.Tea_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Tea.findById( req.params.id)
        // Do updates of properties
        if(req.body.Brand) toUpdate.Brand = req.body.Brand;
        if(req.body.Flavour) toUpdate.Flavour = req.body.Flavour;
        if(req.body.Cost) toUpdate.Cost = req.body.Cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

};
// VIEWS
// Handle a show all view
exports.Tea_view_all_Page = async function (req, res) {
    try {
        theTeas = await Tea.find();
        console.log("njfndw")
        res.render('Tea', { title: 'Tea Search Results', results: theTeas });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
exports.Tea_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Tea.findById( req.query.id)
        res.render('Teadetail', { title: 'Tea Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Tea_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('Teacreate', { title: 'Tea Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.Tea_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Tea.findById(req.query.id)
        res.render('Teaupdate', { title: 'Tea Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.Tea_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Tea.findById(req.query.id)
        res.render('Teadelete', { title: 'Tea Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




