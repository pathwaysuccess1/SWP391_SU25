package com.swp391.superapp.bloodsupport.service.serviceimpl;

import java.util.List;

public interface AuthService {
    boolean login(String username, String password);
    void logout(String username);
    Boolean activateAccount(String accountId);
    Boolean registerUser(String username, String password, String email);
}
