/*Cek session, apakah sudah login atau belum*/

var Auth = {
    check_login: function (req, res, next)
    {
        if (!req.session.logged_in) {
            return res.redirect('/login');
        } else {
        	return res.redirect('/home');
        }

        next();
    },
    is_admin: function (req, res, next)
    {
        if (!req.session.admin) {

            req.flash('info', 'Maaf, Anda tidak dapat mengakses halaman yang Anda tuju!');
            return res.redirect('/');
        }

        next();
    },
};


module.exports = Auth;