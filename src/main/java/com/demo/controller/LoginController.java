package com.demo.controller;

import com.demo.model.entity.LoginEntity;
import com.demo.services.LoginService;
import com.demo.util.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
    LoginEntity loginEntity = new LoginEntity();
    @Autowired
    private LoginService loginService;

    @RequestMapping(value = Constants.LOGIN_REST_API + "/{dealtrackernum}/{password}", method = RequestMethod.POST)
    public LoginEntity validateUser(
            @PathVariable("dealtrackernum") final String dealtrackeersnum,
            @PathVariable("password") final String password) {

        loginEntity = loginService.validateUser(dealtrackeersnum, password);
        LOGGER.info("login status--->" + loginEntity.getStatus() + "-----Login Status-----" + loginEntity.getStatus());
        return loginEntity;
    }

    @RequestMapping(value = "dealtracker/resetnewpassword", method = RequestMethod.POST)
    public LoginEntity ResetNewPassword(@RequestBody LoginEntity loginentity) {
        LoginEntity response = null;
        try {
            if(loginentity == null){
                return null;
            }
            LOGGER.info("Resetting password for User-" + loginentity.getUsername());
            String pass = loginentity.getPassword();
            String newpass = loginentity.getNewpassword();
            String username = loginentity.getUsername();
            response = loginService.resetpassword(username, pass, newpass);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }


}
