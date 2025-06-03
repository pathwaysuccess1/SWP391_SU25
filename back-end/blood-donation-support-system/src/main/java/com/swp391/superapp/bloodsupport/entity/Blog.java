package com.swp391.superapp.bloodsupport.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Blog {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int blogId;
    @Column(name = "content",nullable = false)
    private String content;
    @Column(name = "postDate",nullable = false)
    private Date postDate;
    @Column(name = "conponent",nullable = false)
    private String conponent;
    @Column(name = "accountId",nullable = false,length = 10)
    private String accountId;
    @Column(name = "tagName")
    private String tagName;

    public Blog() {
    }

    public Blog(String content, Date postDate, String conponent, String accountId, String tagName) {
        this.content = content;
        this.postDate = postDate;
        this.conponent = conponent;
        this.accountId = accountId;
        this.tagName = tagName;
    }

    public int getBlogId() {
        return blogId;
    }

    public void setBlogId(int blogId) {
        this.blogId = blogId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public String getConponent() {
        return conponent;
    }

    public void setConponent(String conponent) {
        this.conponent = conponent;
    }

    public String getaccountId() {
        return accountId;
    }

    public void setaccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "blogId=" + blogId +
                ", content='" + content + '\'' +
                ", postDate=" + postDate +
                ", conponent='" + conponent + '\'' +
                ", accountId='" + accountId + '\'' +
                ", tagName='" + tagName + '\'' +
                '}';
    }
}
