package com.demo.model.entity;

import org.pojomatic.annotations.AutoProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * Domain class for LoginDetail
 *
 * @author TCS
 * @version 1.0
 */
@Entity
@Table(name = "tbl_adminuser_details")
@AutoProperty
public class LoginEntity {
    @Id
    @NotNull
    @Column(name = "USERNAME")
    private String username;
    private String firstname;
    private String lastname;
    private String emailid;
    private String phone;
    private String status;
    private String userrole;
    private String login_attempts;
    private String password;
    private int loginflag;
    private String newpassword;

    public LoginEntity() {
    }

    public String getNewpassword() {
        return newpassword;
    }

    public void setNewpassword(String newpassword) {
        this.newpassword = newpassword;
    }

    public int getLoginflag() {
        return loginflag;
    }

    public void setLoginflag(int loginflag) {
        this.loginflag = loginflag;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUserrole() {
        return userrole;
    }

    public void setUserrole(String userrole) {
        this.userrole = userrole;
    }

    public String getLogin_attempts() {
        return login_attempts;
    }

    public void setLogin_attempts(String login_attempts) {
        this.login_attempts = login_attempts;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
