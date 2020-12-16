package findyourpeak.controller;

import findyourpeak.model.User;
import findyourpeak.repository.UserRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users/{id}")
    public ResponseEntity<User> findUserById(@PathVariable Long id){
        User user = this.userRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException
                        ("UserDoesNotExist: " + id));
        return ResponseEntity.ok(user);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users/{email}")
    public ResponseEntity<User> findUserByEmail(@PathVariable String email){
        User user = this.userRepository.findByEmail(email).orElseThrow(
                () -> new ResourceNotFoundException
                        ("UserDoesNotExit: " + email));
        return ResponseEntity.ok(user);
    }

 }
