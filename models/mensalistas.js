module.exports = function(app) {

//-------------------------------------------------------------------------------------------------------------------------------

  var MensalistasModel = {

      deleteAll: function(params, next) {

          var query = 'delete from nomes where mensalista = 0';

         app.connection.query(query, function(err, resp) {
             if (err) return err;

             next(null, resp);
               });
           },


    }

    return MensalistasModel;
}
