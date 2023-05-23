function getToken(){
    const token = localStorage.getItem('token');
    const tokenParse = JSON.parse(token);
    return tokenParse;
}

export default getToken;