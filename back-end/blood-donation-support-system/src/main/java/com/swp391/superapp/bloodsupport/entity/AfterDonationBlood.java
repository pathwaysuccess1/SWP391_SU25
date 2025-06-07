package com.swp391.superapp.bloodsupport.entity;

import jakarta.persistence.*;

@Entity
public class AfterDonationBlood {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAfterDonation;
    @Column(name = "idHeathCheck",nullable = false)
    private int idHeathCheck;
    @Column(name = "infectiousDiseasesChecked")
    private Boolean infectiousDiseasesChecked;
    @Column(name = "isBloodUsable")
    private Boolean isBloodUsable;
    @Column(name = "status")
    private String status;
    @Column(name = "note")
    private String note;

    public AfterDonationBlood() {
    }

    public AfterDonationBlood(int idHeathCheck, Boolean infectiousDiseasesChecked, Boolean isBloodUsable, String status, String note) {
        this.idHeathCheck = idHeathCheck;
        this.infectiousDiseasesChecked = infectiousDiseasesChecked;
        this.isBloodUsable = isBloodUsable;
        this.status = status;
        this.note = note;
    }

    public int getIdAfterDonation() {
        return idAfterDonation;
    }

    public void setIdAfterDonation(int idAfterDonation) {
        this.idAfterDonation = idAfterDonation;
    }

    public int getIdHeathCheck() {
        return idHeathCheck;
    }

    public void setIdHeathCheck(int idHeathCheck) {
        this.idHeathCheck = idHeathCheck;
    }

    public Boolean getInfectiousDiseasesChecked() {
        return infectiousDiseasesChecked;
    }

    public void setInfectiousDiseasesChecked(Boolean infectiousDiseasesChecked) {
        this.infectiousDiseasesChecked = infectiousDiseasesChecked;
    }

    public Boolean getBloodUsable() {
        return isBloodUsable;
    }

    public void setBloodUsable(Boolean bloodUsable) {
        isBloodUsable = bloodUsable;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "AfterDonationBlood{" +
                "idAfterDonation=" + idAfterDonation +
                ", idHeathCheck=" + idHeathCheck +
                ", infectiousDiseasesChecked=" + infectiousDiseasesChecked +
                ", isBloodUsable=" + isBloodUsable +
                ", status='" + status + '\'' +
                ", note='" + note + '\'' +
                '}';
    }
}
