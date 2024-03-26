package com.multiProject.mdCorpRanks.model;

public class UserResponseDTO {
    private String userId;
    private boolean reviewAlreadyGiven;

    // Constructors
    public UserResponseDTO(String userId, boolean reviewAlreadyGiven) {
        this.userId = userId;
        this.reviewAlreadyGiven = reviewAlreadyGiven;
    }

    // Getters and Setters
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public boolean isReviewAlreadyGiven() {
        return reviewAlreadyGiven;
    }

    public void setReviewAlreadyGiven(boolean reviewAlreadyGiven) {
        this.reviewAlreadyGiven = reviewAlreadyGiven;
    }
}