package com.demo.services;

import com.demo.model.entity.LoginEntity;
import com.demo.repository.LoginRepository;
import com.demo.util.EncrptDecryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    LoginEntity loginentity = new LoginEntity();
    @Autowired
    private LoginRepository repository;

    public LoginEntity validateUser(String bidUsername, String password) {

        String errorMessage;
        String newpassword = null;
        int useridexist = 0;
        try {

            if (bidUsername != null) {
                useridexist = repository.checkuserID(bidUsername);
            }
            if (useridexist == 1) {
                loginentity = repository.findOne(bidUsername);
                newpassword = EncrptDecryptPassword.decrypt(loginentity.getPassword());
                System.out.println("New pass------->>>>" + newpassword);

                if ((loginentity.getUsername().equalsIgnoreCase(bidUsername)) & (newpassword.equals(password))) {

                    loginentity.setStatus("success");
                    // loginentity.setErrorMessage(errorMessage);
                } else if ((loginentity.getUsername().equalsIgnoreCase(bidUsername)) & (newpassword != password))

                {
                    loginentity.setStatus("INVALIDCREDENTIALS");
                    // errorMessage = "INVALID CREDENTIALS";
                    // loginentity.setErrorMessage(errorMessage);

                }

            } else {
                loginentity.setStatus("NOUSER");
            }
        } catch (NullPointerException nullPointer) {
            errorMessage = "USER NOT REGISTERED";
            loginentity.setStatus("NOUSER");
            System.out.println("Empty value-- not found" + errorMessage);
            /*	loginentity.setHeartkidNumber(heartkidUsername);*/

        } catch (Exception e) {
            e.printStackTrace();


        }

        return loginentity;
    }


    public LoginEntity resetpassword(String username, String password, String newpassword) {
        int useridexist = 0;
        String encryppass = null;
        try {
            if (username != null) {
                useridexist = repository.checkuserID(username);
            }
            if (useridexist == 1) {
                loginentity = repository.findOne(username);
                encryppass = EncrptDecryptPassword.decrypt(loginentity.getPassword());
                System.out.println("=========encryppass========" + encryppass);
                if ((loginentity.getUsername().equalsIgnoreCase(username)) & (password.equals(encryppass))) {

                    String response = updatenewpassword(username, newpassword);

                    loginentity.setStatus(response);
                    // loginentity.setErrorMessage(errorMessage);
                } else if ((loginentity.getUsername().equalsIgnoreCase(username)) & (password != encryppass))

                {
                    loginentity.setStatus("INVALIDCREDENTIALS");
                }
            } else {
                loginentity.setStatus("NOUSER");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return loginentity;
    }

    public String updatenewpassword(String username, String password) {
        int response = 0;
        String newpassword = null;
        String responsevalue = null;
        int flag = 1;
        try {

            newpassword = EncrptDecryptPassword.encrypt(password);
            response = repository.updateresetpassword(username, newpassword, flag);
            System.out.println("reset aseetotf ----------------->" + response);
            if (response == 1) {
                responsevalue = "RESETSUCCESS";

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return responsevalue;

    }

}
