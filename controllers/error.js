exports.get404 = (req,res,next)=>{
    res.status(400).render('404',{path: req.originalUrl, pageTitle:'Page not found'});
}