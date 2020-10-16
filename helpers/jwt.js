const jwt = require('jsonwebtoken');


const generarJWT = ( uid ) => {
  
    
    return new Promise( (resolve, reject ) => {
        const payload = { uid };
        
        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, ( err, token ) => {
            console.log(err);
            if( err ){
                reject('No se pudo genera el JWT');
            } else {
                resolve( token );
            }
        });
        
    });
    
}

const comprobarJWT = ( token = '') => {
    try {
        const { uid } = jwt.verify( token, process.env.JWT_kEY);
        
        return [ true, uid ];
        
    } catch (error) {
        return [ false, null ];
    }
}

module.exports = {
    generarJWT,
    comprobarJWT
}