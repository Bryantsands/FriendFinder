var app = express();



// get that goes to survey page
app.get('/survey', function (req, res){
    res.sendFile(path.join(_dirname, 'survey.html'));
});


//Default USE route that goes to home page.
app.use(express.static(_dirname + '/home.html'));