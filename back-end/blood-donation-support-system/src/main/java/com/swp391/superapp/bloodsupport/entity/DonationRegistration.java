package com.swp391.superapp.bloodsupport.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class DonationRegistration {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int registrationId;
    @Column(name = "accountId",nullable = false,length = 10)
    private String accountId;
    @Column(name = "conponent",nullable = false)
    private Enum conponent;
    @Column(name = "eventId")
    private int eventId;
    @Column(name = "dateCreated",nullable = false)
    private Date dateCreated;
    @Column(name = "status",nullable = false)
    private String status;

    public DonationRegistration() {
    }

    public DonationRegistration( String accountId, Enum conponent, int eventId, Date dateCreated, String status) {
        this.accountId = accountId;
        this.conponent = conponent;
        this.eventId = eventId;
        this.dateCreated = dateCreated;
        this.status = status;
    }

    public int getRegistrationId() {
        return registrationId;
    }

    public void setRegistrationId(int registrationId) {
        this.registrationId = registrationId;
    }

    public String getaccountId() {
        return accountId;
    }

    public void setaccountId(String accountId) {
        this.accountId = accountId;
    }

    public Enum getConponent() {
        return conponent;
    }

    public void setConponent(Enum conponent) {
        this.conponent = conponent;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "DonationRegistration{" +
                "registrationId=" + registrationId +
                ", accountId='" + accountId + '\'' +
                ", conponent=" + conponent +
                ", eventId=" + eventId +
                ", dateCreated=" + dateCreated +
                ", status='" + status + '\'' +
                '}';
    }
}
