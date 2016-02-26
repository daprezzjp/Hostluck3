exports.view = function(req, res){
  var data = {
	"eventname": req.body.eventname,
    "eventdate": req.body.eventdate,
    "eventtime": req.body.eventtime,
    "meal": "Temp",
    "street": req.body.street,
    "city": req.body.city,
    "state": req.body.state,
    "zip": req.body.zip,
	} ;
  res.render('index', data);
};
