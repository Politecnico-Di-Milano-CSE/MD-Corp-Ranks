package com.multiProject.mdCorpRanks.service;

import com.multiProject.mdCorpRanks.model.UserResponseDTO;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserService {
    private final Map<String, Boolean> users = new HashMap<>();

    public UserResponseDTO registerOrIdentifyUser(String userId) {
        // Check if the user exists
        boolean reviewAlreadyGiven = users.getOrDefault(userId, false);

        if (!users.containsKey(userId)) {
            // Placeholder for user registration
            users.put(userId, false);
        }

        return new UserResponseDTO(userId, reviewAlreadyGiven);
    }

    public void updateUserReviewStatus(String userId, boolean hasReviewed) {
        users.put(userId, hasReviewed);
    }
}
