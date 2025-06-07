/* File: Account.java
 * Author: SE184889 - Nguyễn Trần Việt An (AnNTV)
 * Created on: 02-06-2025
 * Purpose: Pepresnets the Account entity used for user authentication and profile manage
 *
 * Change Log:
 * [02-06-2025] - Created by: AnNTV
 */
package com.swp391.superapp.bloodsupport.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "account")
public class Account {
    @Id
    @Column(name = "id" )
    private String accountId;

    @Column(name = "name")
    private String userName;

    @Column(name = "email")
    private String email;

    @Column(name ="password")
    private String password;

    @Column(name ="is_active")
    private boolean isActive;

    @Column(name ="createion_date")
    private LocalDate creationDate;

    @Column(name ="role")
    private Role role;

    @Column(name ="Hospital")
    private Hospital hospital;



    public Account() {
    }

    public Account(String accountId, String userName, String email, String password, boolean isActive, LocalDate creationDate) {
        this.accountId = accountId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.creationDate = creationDate;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }
}
