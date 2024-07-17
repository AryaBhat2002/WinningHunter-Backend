const { COOKIE_SECURE } = require("../config/serverConfig");
const { loginUser } = require("../services/authService");
const { isLoggedIn } = require("../validation/authValidator");

async function login(req,res) {
    try{
        const loginPayload = req.body;

        // auth service
        const response = await loginUser(loginPayload);

        res.cookie("authToken",response.token, {
            httpOnly: true,
            secure: COOKIE_SECURE,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            data: {
                userRole: response.userRole,
                userData: response.userData
            },
            error: {}
        })
        } catch(error){
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            })
        }
    
}

async function logout(req,res){
    try {
            res.cookie("authToken", " ", {
                httpOnly: true,
                secure: COOKIE_SECURE,
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            console.log(res.cookie('authToken'));
            return res.status(200).json({
                success: true,
                message: 'Log out successfully',
                data: {},
                error: {}
            })
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            message: 'User not logged in, please login to logout',
            data: {},
            error: error
        })
    }
    
}

module.exports = {
    login,
    logout
}