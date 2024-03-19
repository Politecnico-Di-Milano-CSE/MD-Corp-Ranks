package com.multiProject.mdCorpRanks;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class CookieController 
{
    @PostMapping("/generate-cookie")
    public ResponseEntity<String> generateCookie(HttpServletResponse response) 
    {
        String uuid = UUID.randomUUID().toString();

        // Create a cookie with the UUID
        Cookie cookie = new Cookie("randomUUID", uuid);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(7 * 24 * 60 * 60); // expire date

        // Add the cookie to the response
        response.addCookie(cookie);

        // Return a response entity with HTTP status 200 OK
        return ResponseEntity.ok("UUID cookie generated and added to the response");
    }

@GetMapping("/generate-cookie")
public ResponseEntity<String> readCookie(HttpServletRequest request) 
{
    // Attempt to find the "randomUUID" cookie
    Cookie[] cookies = request.getCookies();
    if (cookies != null) 
    {
        for (Cookie cookie : cookies) 
        {
            if ("randomUUID".equals(cookie.getName())) 
            {
                System.out.println("Value of randomUUID cookie: " + cookie.getValue());
                return ResponseEntity.ok("UUID cookie value logged to console");
            }
        }
    }

    // If the cookie was not found, return a different response
    return ResponseEntity.ok("No UUID cookie found");
}
}