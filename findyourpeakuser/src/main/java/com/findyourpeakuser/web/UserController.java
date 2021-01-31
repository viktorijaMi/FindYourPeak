package com.findyourpeakuser.web;


import com.findyourpeakuser.model.User;
import com.findyourpeakuser.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;

    UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin("*")
    @GetMapping
    public List<User> getUsers(){
        return this.userRepository.findAll();
    }

    @CrossOrigin("*")
    @PutMapping("/add")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        if(!this.userRepository.findByUsername(user.getUsername()).isPresent())
                this.userRepository.save(user);
        return ResponseEntity.ok(user);
    }

}
