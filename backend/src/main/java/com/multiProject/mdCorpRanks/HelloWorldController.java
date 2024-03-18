package com.multiProject.mdCorpRanks;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class HelloWorldController {

    @PostMapping(path = "/alice")
    public ResponseEntity<Default> showStatus(@RequestBody Default status){
        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @GetMapping(path = "/hello")
    public String helloWorld(){
        return "Hello world";
    }
}
