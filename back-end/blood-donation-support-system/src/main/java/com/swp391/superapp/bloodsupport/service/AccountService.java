package com.swp391.superapp.bloodsupport.service;

import com.swp391.superapp.bloodsupport.service.serviceimpl.AuthService;

public class AccountService implements AuthService {

    @Override
    public boolean login(String username, String password) {
        return false;
    }

    @Override
    public void logout(String username) {

    }

    @Override
    public Boolean activateAccount(String accountId) {
        return null;
    }

    @Override
    public Boolean registerUser(String username, String password, String email) {
        return null;
    }
}
