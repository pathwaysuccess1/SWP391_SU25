package com.swp391.superapp.bloodsupport.service.serviceimpl;

import java.util.List;

public interface UserService {
    void addProfile(Object Profile);
    void updateProfile(Object Profile);
    void deleteProfile(String accountd);
    List<Object> getAllProfiles();
}
