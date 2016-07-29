const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user.id);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // DATABASE.findOne({where: {id????: id}}).then(function(user){
  // 	done(user);
  // });

  // db.query('SELECT * FROM users WHERE id = ' + id, function(err, result) {
  //   if (err){
  //       console.log(err);
  //   } else {
  //   console.log(result);
  //   }
  //   if (!err) {
  //       done(null, result);
  //   } else {
  //       done(err, null);
  //   }
  // });
});

passport.use(new FacebookStrategy(
  {
    clientID: '1163132887093522',
    clientSecret: '4ee789299e3a25577bfca62b15921564',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos']
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('accessToken: ', accessToken);
    console.log('profile ', profile);
    // console.log('refreshToken: ', refreshToken);

    // const id = profile.id;
    // const name = profile.displayName;
    // const photos = profile.photos[0].value; 
    // DATABASE.findOrCreate({where: {id????: id, name: name, photos: photos}}).spread(function(user, created){
    // 	console.log(user.get({plain: true}));
    // })

  //   process.nextTick(function(){
  //     db.query("SELECT * FROM users WHERE facebook_id = ?", [profile.id], function(err, user){
  //       if (err){
  //         return cd(err);
  //       }
  //       else if (!user){
  //         var id = profile.id;
  //         var name = profile.name;
  //         var email = profile.email;
  //         var provider = "facebook";
  //         var facebook = profile._json;
  //         db.query("INSERT INTO users (id, name, email, provider, token) VALUES (?, ?, ?, ?, ?)", [id, name, email, provider, facebook] function(err){
            
  //         });
  //       } else {
  //         return cd(err, user);
  //       }
  //     });
  //   });
  }
));