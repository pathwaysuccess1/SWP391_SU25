package com.swp391.superapp.bloodsupport.entity;

public class Notification {
    private int notificationId;
    private Account accountId;
    private String title;
    private String content;
    private String img;

    public int getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(int notificationId) {
        this.notificationId = notificationId;
    }

    public Account getAccountId() {
        return accountId;
    }

    public void setAccountId(Account accountId) {
        this.accountId = accountId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "notificationId=" + notificationId +
                ", accountId=" + accountId.getAccountId() +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", img='" + img + '\'' +
                '}';
    }
}
