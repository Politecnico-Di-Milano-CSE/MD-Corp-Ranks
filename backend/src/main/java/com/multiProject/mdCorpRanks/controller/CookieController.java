package com.multiProject.mdCorpRanks.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import com.multiProject.mdCorpRanks.model.UserResponseDTO;
import com.multiProject.mdCorpRanks.service.UserService;
import lombok.RequiredArgsConstructor;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true", methods = {RequestMethod.GET, RequestMethod.POST})
public class CookieController {

    private final UserService userService;

    @PostMapping("/generate-cookie")
    public ResponseEntity<String> generateCookie(HttpServletResponse response) {
        String uuid = UUID.randomUUID().toString();

        // Create a cookie with the UUID
        Cookie cookie = new Cookie("randomUUID", uuid);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(10 * 365 * 24 * 60 * 60); // 10 years

        // Add the cookie to the response
        response.addCookie(cookie);

        // Return a response entity with HTTP status 200 OK
        return ResponseEntity.ok("UUID cookie generated and added to the response");
    }

    @GetMapping("/generate-cookie")
    public ResponseEntity<String> readCookie(HttpServletRequest request) {
        // Attempt to find the "randomUUID" cookie
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("randomUUID".equals(cookie.getName())) {
                    System.out.println("Value of randomUUID cookie: " + cookie.getValue());
                    return ResponseEntity.ok("UUID cookie value logged to console");
                }
            }
        }

        // If the cookie was not found, return a different response
        return ResponseEntity.ok("No UUID cookie found");
    }

    @GetMapping("/api/register")
    public ResponseEntity<?> registerOrIdentifyUser(HttpServletRequest request, HttpServletResponse response) {
        String userId = null;
        boolean reviewAlreadyGiven = false;

        // Check if a "userId" cookie already exists
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("userId".equals(cookie.getName())) {
                    userId = cookie.getValue();
                    break; // Stop looking for the userId if found
                }
            }
        }

        // If no "userId" cookie was found, generate a new one
        if (userId == null) {
            userId = UUID.randomUUID().toString();
            Cookie newUserCookie = new Cookie("userId", userId);
            newUserCookie.setPath("/");
            newUserCookie.setHttpOnly(true);
            newUserCookie.setMaxAge(10 * 365 * 24 * 60 * 60); // 10 years
            response.addCookie(newUserCookie);
        }

        // Use UserService to register or identify the user
        UserResponseDTO userResponse = userService.registerOrIdentifyUser(userId);
        reviewAlreadyGiven = userResponse.isReviewAlreadyGiven();

        // Send back the user response
        return ResponseEntity.ok(userResponse);
    }
}
