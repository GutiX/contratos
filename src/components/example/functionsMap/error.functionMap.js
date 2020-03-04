module.exports = {
    'alt500': (error) => { //status code 500 por defecto
        return { statusCode: error.statusCode || 500, error: error.error || '' };
    },
    'alt400': (error) => { //status code 400 por defecto
        return { statusCode: error.statusCode || 400, error: error.error || '' };
    }
};