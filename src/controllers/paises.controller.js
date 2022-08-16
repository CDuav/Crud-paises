const paisesCtrl = {};


//Consultar todos paises
paisesCtrl.getPaises=(req, res) => {
    req.getConnection((err,con) =>{
        con.query('SELECT * From paises',(errs,rows)=> {
            if(err){
                console.log(err)
            }
            res.json(rows);
        });
    });
}


//Consultar un pais
paisesCtrl.getPais=(req, res) => {
    const {id}= req.params;
    req.getConnection((err,con) =>{
        con.query('SELECT * From paises where ? = _id  ',[id],(errs,rows)=> {
            if(err){
                console.log(err)
            }
            res.json(rows[0]);
        });
    });
}

//Insertar a un pais
paisesCtrl.createPais=(req, res) => {
    const data =req.body;
    console.log(data);
    req.getConnection((err,con) =>{
        con.query('Insert into paises SET ?',[data],(err,paises)=> {
            res.redirect('/paises');
        });
    });
}

//eliminar un pais
paisesCtrl.deletePais=(req, res) => {
    const {id}= req.params;
    console.log(id)
    req.getConnection((err,con) =>{
        con.query('Delete From paises where _id = ?',[id],(errs,rows)=> {
            res.redirect('/paises');
        });
    });
}

//Actualizar un pais
paisesCtrl.editPaises=(req,res) =>{
    const{id}=req.params;
    const data=req.body;
    req.getConnection((err,con) =>{
        con.query('Update paises SET ? Where _id = ?',[data,id],(err,rows)=>{
            this.getPaises;
        });
    });
}


module.exports=paisesCtrl;